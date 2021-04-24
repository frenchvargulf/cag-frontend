"use strict";
var colorPickerForBoxes = document.getElementById("colorPickerForBoxes");
var colorPickerForFilledBoxes = document.getElementById("colorPickerForFilledBoxes");
var colorPickerForHoveredAndNeigbouringBoxes = document.getElementById("colorPickerForHoveredAndNeigbouringBoxes");
var assignColorToBoxes = function (boxesToColor, color) {
    Array.from(document.querySelectorAll(boxesToColor)).forEach(function (box) {
        box.style.backgroundColor = color;
    });
};
var colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes = function (element, color, elementsToColorOnHover) {
    if (element) {
        var htmlElement = element;
        var horizontallyAndVericallyAlignedBoxes_1 = findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours(htmlElement);
        htmlElement.style.backgroundColor = color;
        elementsToColorOnHover.forEach(function (elementToColorOnHover) {
            horizontallyAndVericallyAlignedBoxes_1.map(function (alignedBoxToElement) {
                if (elementToColorOnHover.dataset.position && elementToColorOnHover.dataset.position[0] && elementToColorOnHover.dataset.position[2] && alignedBoxToElement[0] === parseStringToNumber(elementToColorOnHover.dataset.position[0])
                    && alignedBoxToElement[1] === parseStringToNumber(elementToColorOnHover.dataset.position[2])) {
                    elementToColorOnHover.style.backgroundColor = color;
                }
            });
        });
    }
};
var addChangeableColorOnHover = function (filledBoxesToColorOnHover) {
    var elementsToColorOnHover = Array.from(document.querySelectorAll(filledBoxesToColorOnHover));
    elementsToColorOnHover.map(function (box) {
        console.log(typeof box);
        box.addEventListener('mouseenter', function (e) { return colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes(e.target, colorPickerForHoveredAndNeigbouringBoxes.value, elementsToColorOnHover); });
        box.addEventListener('mouseleave', function (e) { return colorCurrentElementAndVericallyAndHorizontallyAlignedBoxes(e.target, colorPickerForFilledBoxes.value, elementsToColorOnHover); });
    });
};
