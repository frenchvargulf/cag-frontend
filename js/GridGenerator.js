"use strict";
var GridGenerator = /** @class */ (function () {
    function GridGenerator() {
        var _this = this;
        this.generateVisualDisplay = function (grid) {
            var placeholderGridElement = document.querySelector('.cag-grid');
            var boxAlreadyExists = document.querySelector(".box");
            if (boxAlreadyExists && boxAlreadyExists.parentNode) {
                boxAlreadyExists.parentNode.removeChild(boxAlreadyExists);
            }
            var container = document.createElement("div");
            container.classList.add('box');
            if (placeholderGridElement && placeholderGridElement.style) {
                placeholderGridElement.style.width = grid.length * 40 + "px";
                placeholderGridElement.style.height = grid.length * 42 + "px";
            }
            var _loop_1 = function (i) {
                var row = [];
                var rowElement = document.createElement("div");
                rowElement.classList.add("row");
                for (var j = 0; j <= grid[i].length - 1; j++) {
                    var element = document.createElement("div");
                    element.classList.add('box_element');
                    element.textContent = "" + grid[i][j];
                    if (grid[i][j] === 1) {
                        var className = (grid[i][j] === 1 ? 'box_element--filled' : '');
                        element.dataset.isFilled = 'true';
                        element.dataset.position = "" + [i, j];
                        element.tabIndex = 0;
                        element.classList.add(className);
                    }
                    row.push(element);
                }
                row.map(function (el) { return rowElement.append(el); });
                container.append(rowElement);
            };
            for (var i = 0; i <= grid.length - 1; i++) {
                _loop_1(i);
            }
            placeholderGridElement === null || placeholderGridElement === void 0 ? void 0 : placeholderGridElement.appendChild(container);
        };
        this.generateGrid = function () {
            if (sizeSlider && sizeSlider.value) {
                var grid = createTwoDimenensionalArray(parseStringToNumber(sizeSlider.value));
                _this.generateVisualDisplay(grid);
                return grid;
            }
        };
    }
    return GridGenerator;
}());
