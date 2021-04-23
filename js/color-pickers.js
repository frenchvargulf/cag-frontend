const colorPickerForBoxes = document.getElementById("colorPickerForBoxes");
const colorPickerForFilledBoxes = document.getElementById("colorPickerForFilledBoxes");
const colorPickerForHoveredAndNeigbouringBoxes = document.getElementById("colorPickerForHoveredAndNeigbouringBoxes");

const assignColorToBoxes = (boxesToColor, color) => {
  [...document.querySelectorAll(boxesToColor)].map(box => {
    box.style.backgroundColor = color;
  });
}

const colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes = (element, color, elementsToColorOnHover) => {
  element.style.backgroundColor = color; 
  const horizontallyAndVericallyAlignedBoxes = findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours(element);
  elementsToColorOnHover.forEach(elementToColorOnHover => {
    horizontallyAndVericallyAlignedBoxes.map( alignedBoxToElement => {
      if (alignedBoxToElement[0] === parseStringToNumber(elementToColorOnHover.dataset.position[0])
        && alignedBoxToElement[1] === parseStringToNumber(elementToColorOnHover.dataset.position[2])
      ) {
        elementToColorOnHover.style.backgroundColor = color;
      }
    })
  })
}

const addChangeableColorOnHover = filledBoxesToColorOnHover => {
  const elementsToColorOnHover = [...document.querySelectorAll(filledBoxesToColorOnHover)];
  elementsToColorOnHover.map(box => {
    box.addEventListener('mouseenter', e => colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes(e.target, colorPickerForHoveredAndNeigbouringBoxes.value, elementsToColorOnHover));
    box.addEventListener('mouseleave', e => colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes(e.target, colorPickerForFilledBoxes.value, elementsToColorOnHover));
  });
}
