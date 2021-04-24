"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var findHorizontallyAndVerticallyAlignedBoxes = function (box) {
    var neighbours = [];
    var positionX;
    var positionY;
    if (box.dataset && box.dataset.position && box.dataset.position[0] && box.dataset.position[2]) {
        positionX = parseStringToNumber(box.dataset.position[0]);
        positionY = parseStringToNumber(box.dataset.position[2]);
    }
    else {
        positionX = box[0];
        positionY = box[1];
    }
    var possiblePositions = [
        [positionX - 1, positionY],
        [positionX + 1, positionY],
        [positionX, positionY - 1],
        [positionX, positionY + 1]
    ];
    for (var i = 0; i <= possiblePositions.length - 1; i++) {
        if (currentGridState && currentGridState[possiblePositions[i][0]] && currentGridState[possiblePositions[i][1]] && checkIfValueIsOne(currentGridState[possiblePositions[i][0]][possiblePositions[i][1]])) {
            neighbours.push([possiblePositions[i][0], possiblePositions[i][1]]);
        }
    }
    return neighbours;
};
var findHorizontallyAndVerticallyAlignedBoxesWithTheirNeigbours = function (box) {
    var neighbours = findHorizontallyAndVerticallyAlignedBoxes(box);
    if (neighbours) {
        neighbours.forEach(function (el) {
            var secondDegreeNeighbours = findHorizontallyAndVerticallyAlignedBoxes(el);
            if (secondDegreeNeighbours.length !== 0) {
                neighbours = __spreadArray(__spreadArray([], __read(neighbours)), __read(secondDegreeNeighbours));
            }
        });
        neighbours = neighbours
            .map(function (arr) { return JSON.stringify(arr); })
            .filter(function (itm, idx, arr) { return arr.indexOf(itm) === idx; })
            .map(function (str) { return JSON.parse(str); });
        // Exlude or Include Current Clicked
        // .filter(el => !(el[0] === parseStringToNumber(box.dataset.position[0]) && el[1] === parseStringToNumber(box.dataset.position[2])));
    }
    return neighbours;
};
