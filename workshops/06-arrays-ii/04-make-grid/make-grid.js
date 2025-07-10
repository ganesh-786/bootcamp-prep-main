// YOUR CODE BELOW
function makeGrid(col, row) {
  let grid = [];
  for (i = 0; i < row; i++) {
    let thisgrid = [];
    for (j = 0; j < col; j++) {
      thisgrid.push(j + 1);
    }
    grid.push(thisgrid);
  }
  return grid;
}
