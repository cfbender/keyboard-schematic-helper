// puts in line breaks after rows, inserts blank spots where no switch exists, returns multiline string

function getCols(keymap) {
  let totalCols = 0;

  keymap.forEach(key => {
    let col = key[2];

    totalCols = col > totalCols ? col : totalCols;
  });

  return parseInt(totalCols);
}

function makeGrid(keymap) {
  let result = [];
  let lastRow = 0;
  let tempArr = [];

  keymap.forEach(key => {
    let row = key[1];

    if (row > lastRow) {
      lastRow = row;
      result.push(tempArr);
      tempArr = [];
    }

    tempArr.push(key);
  });

  return result;
}

function fillGrid(keyGrid, cols) {
  let result = [];

  keyGrid.forEach(row => {
    if (row.length === cols + 1) {
      result.push(row);
    } else {
      let temp = [];
      let expectedCol = 0;
      row.forEach(key => {
        let difference = key[2] - expectedCol;
        if (difference > 0) {
          let filler = new Array(difference);
          temp.push(...filler.fill("_x_"));
        }
        temp.push(key);
        expectedCol = parseInt(key[2]) + 1;
      });

      if (temp.length < cols + 1) {
        let difference = cols + 1 - temp.length;
        let filler = new Array(difference);
        temp.push(...filler.fill("_x_"));
      }
      result.push(temp);
    }
  });

  return result;
}

export function layoutProcess(str) {
  const matches = str.match(/(K[0-9]{2})/gm);
  if (matches === null) {
    return false;
  }
  const sorted = matches.sort();
  const cols = getCols(sorted);
  const grid = fillGrid(makeGrid(sorted), cols);
  return grid;
}