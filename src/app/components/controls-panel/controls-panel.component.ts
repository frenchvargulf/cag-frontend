import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-controls-panel',
  templateUrl: './controls-panel.component.html',
  styleUrls: ['./controls-panel.component.scss']
})
export class ControlsPanelComponent {
  @Input() colorPickers;
  @Output() emitRangeSliderValue = new EventEmitter<number>();
  @Output() emitColorPickerValue = new EventEmitter<any>();

  emitChangedColor(colorPicker, $event): void {
    this.emitColorPickerValue.emit({
      label: colorPicker.label,
      defaultColor: $event.target.value
    });
  }

  emitRegenerateGrid($event): void {
    this.emitRangeSliderValue.emit($event);
  }

}
