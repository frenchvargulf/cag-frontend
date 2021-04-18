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
    this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElement(this.element);
  }

  @HostListener('mouseleave') mouseleave(): void {
    this.gridSerivce.findVerticallyAndHorizontallyAlignedBoxesToElement(this.element);
  }

}
