import { GridService } from '../sevices/grid/grid.service';
import { ChoosenFilledBoxDirective } from './choosen-filled-box.directive';

describe('ChoosenFilledBoxDirective', () => {
  it('should create an instance', () => {
    const service = new GridService();
    const directive = new ChoosenFilledBoxDirective(service);
    expect(directive).toBeTruthy();
  });
});
