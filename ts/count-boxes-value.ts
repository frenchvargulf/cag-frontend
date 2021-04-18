const countVerticallyAndHorizontallyAlignedBoxesValue = (
  e: Event, 
  box: HTMLInputElement
  ) => {
  let count: number = 0;

  findHorizontallyAndVerticallyAlignedBoxes(box).map(neighbour => count += currentGridState ? currentGridState[neighbour[0]][neighbour[1]] : 0);
  (e.target as HTMLElement).innerText = `${count}`;
}

const listenForCountVerticallyAndHorizontallyAlignedBoxesValueEvents = () => {
  const boxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.box_element--filled');
  let previouslyClickedBox: HTMLInputElement;
  Array.from(boxes).map(box => {
    box.addEventListener('click', e => {
      if (previouslyClickedBox) {
        previouslyClickedBox.innerText = '1';
      }
      previouslyClickedBox = box;
      countVerticallyAndHorizontallyAlignedBoxesValue(e, box);
    });
    box.addEventListener('keyup', e => {
      if(e.key === 'Space' || e.key === ' '){
        if (previouslyClickedBox) {
          previouslyClickedBox.innerText = '1';
        }
        previouslyClickedBox = box;
        countVerticallyAndHorizontallyAlignedBoxesValue(e, box);
      }    
    })
  })  
}
