import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent {
  currentSizeValue = 10;
  @Output() emitRangeSliderValue = new EventEmitter<number>();

  onChange(changeRangeEvent): void {
    this.currentSizeValue = changeRangeEvent.target.value;
    this.emitRangeSliderValue.emit(this.currentSizeValue);
  }
}
