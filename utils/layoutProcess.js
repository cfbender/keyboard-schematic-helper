// puts in line breaks after rows, inserts blank spots where no switch exists, returns multiline string

function getCols(keymap) {
  let totalCols = 0;

  keymap.forEach(key => {
    let col = parseInt(key[2], 16);

    totalCols = col > totalCols ? col : totalCols;
  });
  return totalCols;
}

function makeGrid(keymap) {
  let result = [];
  let lastRow = 0;
  let tempArr = [];

  keymap.forEach((key, idx) => {
    let row = parseInt(key[1], 16);
    if (row > lastRow) {
      lastRow = row;
      result.push(Array.from(new Set(tempArr)));
      tempArr = [];
    }

    tempArr.push(key);

    if (idx === keymap.length - 1) {
      result.push(Array.from(new Set(tempArr)));
    }
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
        let difference = parseInt(key[2], 16) - expectedCol;
        if (difference > 0) {
          let filler = new Array(difference);
          temp.push(...filler.fill("XXX"));
        }
        temp.push(key);
        expectedCol = parseInt(key[2], 16) + 1;
      });

      if (temp.length < cols + 1) {
        let difference = cols + 1 - temp.length;
        let filler = new Array(difference);
        temp.push(...filler.fill("XXX"));
      }
      result.push(temp);
    }
  });

  return result;
}

export function layoutProcess(str) {
  const matches = str.match(/(K[0-9A-F]{2})/gim);
  if (matches === null) {
    return false;
  }
  const sorted = matches.sort();
  const cols = getCols(sorted);
  const grid = fillGrid(makeGrid(sorted), cols);
  return grid;
}
