import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Grid } from 'src/app/models/grid';
import { GridGenerator } from '../../GridGenerator';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  defaultGridRange = 10;
  gridGenerator: GridGenerator = new GridGenerator();
  private currentGridSubject: BehaviorSubject<any>;
  public currentGrid: Observable<any>;

  currentElementState;
  verticallyAndHorizontallyAlignedBoxesToElementState = {};
  verticallyAndHorizontallyAlignedBoxesToElementCount = 0;

  constructor() {
    this.currentGridSubject = new BehaviorSubject<Grid[][]>(this.gridGenerator.generate(10));
    this.currentGrid = this.currentGridSubject.asObservable();
  }

  public get currentGridValue(): Grid[][] {
    return this.currentGridSubject.value;
  }

  generateGrid(n: number): Grid[][] {
    this.currentGridSubject.next(this.gridGenerator.generate(n));
    return this.gridGenerator.generate(n);
  }

  findHorizontallyAndVerticallyAlignedBoxesHover = box => {
    let neighbours = [];

    let positionX = box[1];
    let positionY = box[2];

    const possiblePositions = [
      [positionX - 1, positionY],
      [positionX + 1, positionY],
      [positionX, positionY - 1],
      [positionX, positionY + 1]
    ]

    const currentGridState = this.currentGridValue;

    for (let i = 0; i <= possiblePositions.length-1; i++) {
      if (currentGridState[possiblePositions[i][0]] && currentGridState[possiblePositions[i][1]]) {
        if (currentGridState[possiblePositions[i][0]][possiblePositions[i][1]].value === 1) {
          currentGridState[possiblePositions[i][0]][possiblePositions[i][1]].isCurrentlyNeighbourToHoveredElement =
          !currentGridState[possiblePositions[i][0]][possiblePositions[i][1]].isCurrentlyNeighbourToHoveredElement
          neighbours.push([currentGridState[possiblePositions[i][0]][possiblePositions[i][1]], possiblePositions[i][0], possiblePositions[i][1]])
        } 
      }
    }
    return neighbours;
  }

  findHorizontallyAndVerticallyAlignedBoxes = box => {
    let neighbours = [];

    let positionX = box[1];
    let positionY = box[2];

    const possiblePositions = [
      [positionX - 1, positionY],
      [positionX + 1, positionY],
      [positionX, positionY - 1],
      [positionX, positionY + 1]
    ]

    const currentGridState = this.currentGridValue;

    for (let i = 0; i <= possiblePositions.length-1; i++) {
      if (currentGridState[possiblePositions[i][0]] && currentGridState[possiblePositions[i][1]]) {
        neighbours.push([currentGridState[possiblePositions[i][0]][possiblePositions[i][1]], possiblePositions[i][0], possiblePositions[i][1]])
      }
    }
    return neighbours;
  }
  
  findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours = box => {
    let neighbours = this.findHorizontallyAndVerticallyAlignedBoxes(box);
    let count = 0;

    if (neighbours) {
      neighbours.forEach(el => {
        const secondDegreeNeighbours = this.findHorizontallyAndVerticallyAlignedBoxes(el);
        if (secondDegreeNeighbours.length !== 0) {
          neighbours = [ ...neighbours, ...secondDegreeNeighbours ]
        }
      });
      neighbours = neighbours 
        .map(arr=>JSON.stringify(arr))
        .filter((itm, idx, arr) => arr.indexOf(itm) === idx)
        .map(str=>JSON.parse(str))
        .map(el => count += el[0].value)
    }
    this.verticallyAndHorizontallyAlignedBoxesToElementCount = count;
    return neighbours;
  }

  findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigboursAndHover = box => {
    let neighbours = this.findHorizontallyAndVerticallyAlignedBoxesHover(box);
    if (neighbours) {
      neighbours.forEach(el => {
        const secondDegreeNeighbours = this.findHorizontallyAndVerticallyAlignedBoxesHover(el);
        if (secondDegreeNeighbours.length !== 0) {
          neighbours = [ ...neighbours, ...secondDegreeNeighbours ]
        }
      });
      neighbours = neighbours 
        .map(arr=>JSON.stringify(arr))
        .filter((itm, idx, arr) => arr.indexOf(itm) === idx)
        .map(str => JSON.parse(str))
    }
    return neighbours;
  }

  getVerticallyAndHorizontallyAlignedBoxesToElementCount(): number {
    return this.verticallyAndHorizontallyAlignedBoxesToElementCount;
  }

}
