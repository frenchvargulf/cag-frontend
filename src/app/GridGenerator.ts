import { createTwoDimenensionalArray } from './helpers';

export class GridGenerator {
  generate = (n: number) => {
    return createTwoDimenensionalArray(n);
  }
}
