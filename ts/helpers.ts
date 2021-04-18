const createTwoDimenensionalArray = (size: number) => {
  let result: number[][] = [];
  for (let i = 0 ; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return result;
}

const checkIfValueIsOne = (valueToCheck: number) => valueToCheck === 1;

const parseStringToNumber = (stringToParse: string) => {
  let number = 0;
  try {
    number = JSON.parse(stringToParse);
  } catch (ex) {
    console.log(ex);
  }
  return number;
}
