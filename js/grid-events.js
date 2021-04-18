"use strict";
if (sizeSlider && rangeSliderOutput) {
    sizeSlider.addEventListener('input', function (e) {
        var _a, _b;
        rangeSliderOutput.innerHTML = ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) + " x " + ((_b = e.target) === null || _b === void 0 ? void 0 : _b.value);
        initGrid();
    });
}
if (colorPickerForBoxes && colorPickerForFilledBoxes) {
    colorPickerForBoxes.addEventListener('input', function (e) {
        assignColorToBoxes('.box_element:not(box_element--filled)', colorPickerForBoxes.value);
        assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes.value);
    });
}
if (colorPickerForFilledBoxes) {
    colorPickerForFilledBoxes.addEventListener('input', function (e) {
        assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes.value);
    });
}
if (colorPickerForHoveredAndNeigbouringBoxes) {
    colorPickerForHoveredAndNeigbouringBoxes.addEventListener('input', function (e) {
        addChangeableColorOnHover('.box_element--filled');
    });
}
