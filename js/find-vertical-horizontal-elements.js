"use strict";
const findHorizontallyAndVerticallyAlignedBoxes = box => {
  let neighbours = [];

  let positionX;
  let positionY;
  if (box.dataset && box.dataset.position && box.dataset.position[0] && box.dataset.position[2]) {
    positionX = parseStringToNumber(box.dataset.position[0]);
    positionY = parseStringToNumber(box.dataset.position[2]);
  } else {
    positionX = box[0];
    positionY = box[1];
  }


  const possiblePositions = [
    [positionX - 1, positionY],
    [positionX + 1, positionY],
    [positionX, positionY - 1],
    [positionX, positionY + 1]
  ]

  for (let i = 0; i <= possiblePositions.length-1; i++) {
    if (currentGridState[possiblePositions[i][0]] && currentGridState[possiblePositions[i][1]] && checkIfValueIsOne(currentGridState[possiblePositions[i][0]][possiblePositions[i][1]])) {
      neighbours.push([possiblePositions[i][0], possiblePositions[i][1]])
    }
  }
  return neighbours;
}

const findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours = box => {
  let neighbours = findHorizontallyAndVerticallyAlignedBoxes(box);
  if (neighbours) {
    neighbours.forEach(el => {
      const secondDegreeNeighbours = findHorizontallyAndVerticallyAlignedBoxes(el);      
      if (secondDegreeNeighbours.length !== 0) {
        neighbours = [ ...neighbours, ...secondDegreeNeighbours ]
      }
    });
    neighbours = neighbours
      .map(arr=>JSON.stringify(arr))
      .filter((itm, idx, arr) => arr.indexOf(itm) === idx)
      .map(str=>JSON.parse(str))
      // Exlude or Include Current Clicked
      // .filter(el => !(el[0] === parseStringToNumber(box.dataset.position[0]) && el[1] === parseStringToNumber(box.dataset.position[2])));
  }

  return neighbours;
}
