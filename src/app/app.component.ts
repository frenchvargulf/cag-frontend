import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Grid } from './models/grid';
import { GridService } from './sevices/grid/grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = true;
  currentGridState: Grid[][] | undefined = this.gridService.currentGridValue;
  previouslyClickedElement;
  colorPickers = [
    {label: 'Box Color', target: 'colorPickerForBoxes', defaultColor: '#EDDEDE' },
    {label: 'Filled Box Color', target: 'colorPickerForFilledBoxes', defaultColor: '#E1E1DF' },
    {label: 'Hover Box Color', target: 'colorPickerForHoveredAndNeigbouringBoxes', defaultColor: '#FFFFFF' }
  ];
  codeLink = 'https://github.com/frenchvargulf/cag-frontend';
  codeLinkText = 'View Code';
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  reason = '';

  constructor(private gridService: GridService) {}

  close(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
  }

  regenerateGrid($event): void {
    this.gridService.generateGrid($event);
    this.currentGridState = this.gridService.currentGridValue;
  }

  changeColor($event): void {
    const newColorPickers = [...this.colorPickers];
    newColorPickers.forEach( colorPicker => {
      if (colorPicker.label === $event.label) {
        colorPicker.defaultColor = $event.defaultColor;
        return colorPicker;
      }
      return colorPicker;
    })
    this.colorPickers = newColorPickers;
  }

  applyBackgroundColor(boxElement): string {
    return boxElement.value === 1 ?
      (boxElement.isCurrentlyNeighbourToHoveredElement ? this.colorPickers[2].defaultColor : this.colorPickers[1].defaultColor) :
      this.colorPickers[0].defaultColor;
  }

  getSpaceInputEvent(keybordInputEvent): void {
    if (keybordInputEvent.keyCode === 32) {
      this.getAndDisplayCountedVerticallyAndHortizontallyAlignedBoxesToElement(keybordInputEvent);
    }
  }

  getAndDisplayCountedVerticallyAndHortizontallyAlignedBoxesToElement(clickedBox): void {
    const count = this.gridService.getVerticallyAndHorizontallyAlignedBoxesToElementCount();
    clickedBox.target.innerText = count;

    if (this.previouslyClickedElement) {
      this.previouslyClickedElement.innerText = 1;
    }
    this.previouslyClickedElement = clickedBox.target;
  }
}
