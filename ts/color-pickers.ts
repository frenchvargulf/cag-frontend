const colorPickerForBoxes = <HTMLInputElement>document.getElementById("colorPickerForBoxes");
const colorPickerForFilledBoxes = <HTMLInputElement>document.getElementById("colorPickerForFilledBoxes");
const colorPickerForHoveredAndNeigbouringBoxes = <HTMLInputElement>document.getElementById("colorPickerForHoveredAndNeigbouringBoxes");

const assignColorToBoxes = (boxesToColor: string, color: string) => {
  Array.from(document.querySelectorAll<HTMLElement>(boxesToColor)).forEach((box: HTMLElement) => {
    box.style.backgroundColor = color;
  });
}

const colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes = (
  element: EventTarget | null, 
  color: string, 
  elementsToColorOnHover: HTMLElement[]
  ) => {
  if (element) {
    let htmlElement = <HTMLInputElement>element;
    const horizontallyAndVericallyAlignedBoxes = findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours(htmlElement);
    htmlElement.style.backgroundColor = color;
    elementsToColorOnHover.forEach((elementToColorOnHover: HTMLElement) => {
      horizontallyAndVericallyAlignedBoxes.map( alignedBoxToElement => {
        if (elementToColorOnHover.dataset.position && elementToColorOnHover.dataset.position[0] && elementToColorOnHover.dataset.position[2] && alignedBoxToElement[0] === parseStringToNumber(elementToColorOnHover.dataset.position[0])
          && alignedBoxToElement[1] === parseStringToNumber(elementToColorOnHover.dataset.position[2])
        ) {
          elementToColorOnHover.style.backgroundColor = color;
        }
      })
    })
  }
}

const addChangeableColorOnHover = (filledBoxesToColorOnHover: string) => {
  const elementsToColorOnHover = Array.from(document.querySelectorAll<HTMLElement>(filledBoxesToColorOnHover));
  elementsToColorOnHover.map((box: HTMLElement) => {
    console.log(typeof box);
    box.addEventListener('mouseenter', (e: Event) => colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes(e.target, colorPickerForHoveredAndNeigbouringBoxes.value, elementsToColorOnHover));
    box.addEventListener('mouseleave', (e: Event) => colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes(e.target, colorPickerForFilledBoxes.value, elementsToColorOnHover));
  });
}

