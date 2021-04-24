"use strict";
var countVerticallyAndHorizontallyAlignedBoxesValue = function (e, box) {
    var count = 0;
    findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours(box).map(function (neighbour) { return count += currentGridState ? currentGridState[neighbour[0]][neighbour[1]] : 0; });
    e.target.innerText = "" + count;
};
var listenForCountVerticallyAndHorizontallyAlignedBoxesValueEvents = function () {
    var boxes = document.querySelectorAll('.box_element--filled');
    var previouslyClickedBox;
    Array.from(boxes).map(function (box) {
        box.addEventListener('click', function (e) {
            if (previouslyClickedBox) {
                previouslyClickedBox.innerText = '1';
            }
            previouslyClickedBox = box;
            countVerticallyAndHorizontallyAlignedBoxesValue(e, box);
        });
        box.addEventListener('keyup', function (e) {
            if (e.key === 'Space' || e.key === ' ') {
                if (previouslyClickedBox) {
                    previouslyClickedBox.innerText = '1';
                }
                previouslyClickedBox = box;
                countVerticallyAndHorizontallyAlignedBoxesValue(e, box);
            }
        });
    });
};
