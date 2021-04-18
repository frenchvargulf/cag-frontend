"use strict";
var currentGridState = [];
var initGrid = function () {
    var gridGenerator = new GridGenerator();
    currentGridState = gridGenerator.generateGrid();
    assignColorToBoxes('.box_element', colorPickerForBoxes === null || colorPickerForBoxes === void 0 ? void 0 : colorPickerForBoxes.value);
    assignColorToBoxes('.box_element--filled', colorPickerForFilledBoxes === null || colorPickerForFilledBoxes === void 0 ? void 0 : colorPickerForFilledBoxes.value);
    addChangeableColorOnHover('.box_element--filled');
    listenForCountVerticallyAndHorizontallyAlignedBoxesValueEvents();
};
initGrid();
