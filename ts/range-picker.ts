const sizeSlider = <HTMLInputElement>document.getElementById("sizeRange");
const rangeSliderOutput = document.getElementById("currentSizeValue");

if (sizeSlider && rangeSliderOutput) {
  rangeSliderOutput.innerHTML = sizeSlider.value + " x " + sizeSlider.value;
}
