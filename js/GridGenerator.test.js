const GridGenerator = require('./GridGenerator');

beforeEach(() => {
});

test('checks grid assignment', () => {
  const gridGenerator = new GridGenerator();
  const grid = gridGenerator.generateGrid();
  expect(grid).toBe([]);
});