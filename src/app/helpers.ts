import { Grid } from "./models/grid";

export const createTwoDimenensionalArray = (size: number) => {
  const result: Grid[][] = [];
  for (let i = 0 ; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = {value: Math.floor(Math.random() * 2), isCurrentlyNeighbourToHoveredElement: false };
    }
  }
  return result;
};
