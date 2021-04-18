const findHorizontallyAndVerticallyAlignedBoxes = (box: HTMLInputElement) => {
  const neighbours = [];

  if (box.dataset.position) {
    let positionX = parseStringToNumber(box.dataset.position[0]);
    let positionY = parseStringToNumber(box.dataset.position[2]);
  
    const possiblePositions = [
      [positionX - 1, positionY],
      [positionX + 1, positionY],
      [positionX, positionY - 1],
      [positionX, positionY + 1]
    ]
  
    for (let i = 0; i <= possiblePositions.length-1; i++) {
      if (currentGridState && currentGridState[possiblePositions[i][0]] && currentGridState[possiblePositions[i][1]] && checkIfValueIsOne(currentGridState[possiblePositions[i][0]][possiblePositions[i][1]])) {
        neighbours.push([possiblePositions[i][0], possiblePositions[i][1]])
      }
    }
  }

  return neighbours;
}