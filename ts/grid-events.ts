
if (sizeSlider && rangeSliderOutput) {
  sizeSlider.addEventListener('input', (e) => {
    rangeSliderOutput.innerHTML = (e.target as HTMLInputElement)?.value + " x " + (e.target as HTMLInputElement)?.value;
    initGrid();
  })
}
if (colorPickerForBoxes && colorPickerForFilledBoxes) {
  colorPickerForBoxes.addEventListener('input', e => {
    assignColorToBoxes('.box_element:not(box_element--filled)', colorPickerForBoxes.value);
    assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes.value);
  })
}

if (colorPickerForFilledBoxes) {
  colorPickerForFilledBoxes.addEventListener('input', e => {
    assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes.value);
  })  
}

if (colorPickerForHoveredAndNeigbouringBoxes) {
  colorPickerForHoveredAndNeigbouringBoxes.addEventListener('input', e => {
    addChangeableColorOnHover('.box_element--filled');
  })
}
