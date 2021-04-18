sizeSlider.addEventListener('input', e => {
  rangeSliderOutput.innerHTML = e.target.value + " x " + e.target.value;
  initGrid();
})

colorPickerForBoxes.addEventListener('input', e => {
  assignColorToBoxes('.box_element:not(box_element--filled)', colorPickerForBoxes.value);
  assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes.value);
})

colorPickerForFilledBoxes.addEventListener('input', e => {
  assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes.value);
})

colorPickerForHoveredAndNeigbouringBoxes.addEventListener('input', e => {
  addChangeableColorOnHover('.box_element--filled');
})
