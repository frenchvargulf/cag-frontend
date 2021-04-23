const countVerticallyAndHorizontallyAlignedBoxesValue = (e, box) => {
  let count = 0;
  findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours(box).map(neighbour => count += currentGridState[neighbour[0]][neighbour[1]]);
  e.target.innerText = count;
}

const listenForCountVerticallyAndHorizontallyAlignedBoxesValueEvents = () => {
  const boxes = document.querySelectorAll('.box_element--filled');
  let previouslyClickedBox;
  [...boxes].map(box => {
    box.addEventListener('click', e => {
      if (previouslyClickedBox) {
        previouslyClickedBox.innerText = 1;
      }
      previouslyClickedBox = box;
      countVerticallyAndHorizontallyAlignedBoxesValue(e, box);
    });
    box.addEventListener('keyup', e => {
      if(e.key === 'Space' || e.key === ' '){
        if (previouslyClickedBox) {
          previouslyClickedBox.innerText = 1;
        }
        previouslyClickedBox = box;
        countVerticallyAndHorizontallyAlignedBoxesValue(e, box);
      }    
    })
  })  
}
