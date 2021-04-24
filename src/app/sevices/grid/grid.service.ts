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

  findVerticallyAndHorizontallyAlignedBoxesToElement(value): void {
    this.currentElementState = value;

    const possiblePositions = [
      [value[1] - 1, value[2]],
      [value[1] + 1, value[2]],
      [value[1], value[2] - 1],
      [value[1], value[2] + 1]
    ];

    const currentGridState = this.currentGridValue;

    if (currentGridState[value[1]][value[2]]) {
      currentGridState[value[1]][value[2]].isCurrentlyNeighbourToHoveredElement =
      !currentGridState[value[1]][value[2]].isCurrentlyNeighbourToHoveredElement;
    }

    for (const possiblePosition of possiblePositions) {
      if (currentGridState[possiblePosition[0]] && currentGridState[possiblePosition[0]][possiblePosition[1]]) {
        currentGridState[possiblePosition[0]][possiblePosition[1]].isCurrentlyNeighbourToHoveredElement =
        !currentGridState[possiblePosition[0]][possiblePosition[1]].isCurrentlyNeighbourToHoveredElement;
      }
    }
  }


  findVerticallyAndHorizontallyAlignedBoxesToElementAndCount(value): any {
    // TODO Optimize number of times called with findVerticallyAndHorizontallyAlignedBoxesToElement
    const possiblePositions = [
      [value[1] - 1, value[2]],
      [value[1] + 1, value[2]],
      [value[1], value[2] - 1],
      [value[1], value[2] + 1]
    ];

    const currentGridState = this.currentGridValue;
    const neighbours = [];
    let count = 0;

    for (const possiblePosition of possiblePositions) {
      if (currentGridState[possiblePosition[0]] && currentGridState[possiblePosition[0]][possiblePosition[1]]) {
        neighbours.push(currentGridState[possiblePosition[0]][possiblePosition[1]]);
        count += currentGridState[possiblePosition[0]][possiblePosition[1]].value;
      }
    }
    this.verticallyAndHorizontallyAlignedBoxesToElementCount = count;
    return { neighbours, count };
  }

  getVerticallyAndHorizontallyAlignedBoxesToElementCount(): number {
    return this.verticallyAndHorizontallyAlignedBoxesToElementCount;
  }

}
