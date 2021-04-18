import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-controls-panel-item-wrapper',
  templateUrl: './controls-panel-item-wrapper.component.html',
  styleUrls: ['./controls-panel-item-wrapper.component.scss']
})
export class ControlsPanelItemWrapperComponent {
  @Input() isClickable = false;
}
