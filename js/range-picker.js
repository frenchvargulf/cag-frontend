"use strict";
var sizeSlider = document.getElementById("sizeRange");
var rangeSliderOutput = document.getElementById("currentSizeValue");
if (sizeSlider && rangeSliderOutput) {
    rangeSliderOutput.innerHTML = sizeSlider.value + " x " + sizeSlider.value;
}
