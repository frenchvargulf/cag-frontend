import { Directive, HostListener, Input } from '@angular/core';
import { GridService } from '../sevices/grid/grid.service';

@Directive({
  selector: '[appChoosenFilledBox]'
})
export class ChoosenFilledBoxDirective {
  @Input('appChoosenFilledBox') element;

  constructor(private gridSerivce: GridService) { }

  @HostListener('click') clicked(): void {
    this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElementAndCount(this.element);
  }

  @HostListener('keyup.Space') Enter(): void {
    this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElementAndCount(this.element);
  }

  @HostListener('mouseover') mouseover(): void {
    if (this.element[0].value) {
      this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElement(this.element);
    }
  }

  @HostListener('mouseleave') mouseleave(): void {
    if (this.element[0].value) {
      this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElement(this.element);
    }
  }

}
