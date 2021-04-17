class GridGenerator {

  generateVisualDisplay = (grid: number[][]) => {
    const placeholderGridElement: HTMLElement | null = document.querySelector('.cag-grid');
    const boxAlreadyExists = document.querySelector(".box");

    if (boxAlreadyExists && boxAlreadyExists.parentNode) {
      boxAlreadyExists.parentNode.removeChild(boxAlreadyExists);
    }

    const container = document.createElement("div");
    container.classList.add('box');

    if (placeholderGridElement && placeholderGridElement.style) {
      placeholderGridElement.style.width = `${grid.length * 40}px`;
      placeholderGridElement.style.height = `${grid.length * 42}px`;
    }

    for (let i = 0; i <= grid.length - 1; i++) {
      const row = [];
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
      for (let j = 0; j <= grid[i].length - 1; j++) {
        const element = document.createElement("div");
        element.classList.add('box_element');
        element.textContent = `${grid[i][j]}`;
        if (grid[i][j] === 1) {
          const className = (grid[i][j] === 1 ? 'box_element--filled' : '');
          element.dataset.isFilled = 'true';
          element.dataset.position = `${[i, j]}`;
          element.tabIndex = 0;
          element.classList.add(className);
        }
        row.push(element);
      }
      row.map(el => rowElement.append(el));
      container.append(rowElement);
    }
    placeholderGridElement?.appendChild(container);
  }

  generateGrid = () => {
    if (sizeSlider && sizeSlider.value) {
      let grid = createTwoDimenensionalArray(parseStringToNumber(sizeSlider.value));
      this.generateVisualDisplay(grid);
      return grid;
    }
  }

}