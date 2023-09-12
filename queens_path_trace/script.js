const cells = document.querySelectorAll(".checkbox"); //64
const rows = document.querySelectorAll(".row"); //8
const columns = rows[0].querySelectorAll(".checkbox"); //8

// console.log("cells", cells);

cells.forEach((cell) => {
  cell.textContent = cell.id - 1;

  cell.classList.add(`checkbox-${cell.id}`);
  cell.addEventListener("click", () => {
    boardRefresh();

    cell.style.backgroundColor = "red";

    const cellId = cell.id - 1;
    const row = Math.floor(cellId / rows.length);
    const col = cellId % columns.length;

    topTrace(row, col);
    leftTrace(row, col);
    rightTrace(row, col);
    bottomTrace(row, col);

    topLeftTrace(row, col);
    topRightTrace(row, col);
    bottomLeftTrace(row, col);
    bottomRightTrace(row, col);
  });
});

function topTrace(row, col) {
  //r => 2, 1, 0
  while (row >= 0) {
    insertredColor(row, col);
    row--;
  }
}
function leftTrace(row, col) {
  //c => 2, 1, 0
  while (col >= 0) {
    insertredColor(row, col);
    col--;
  }
}
function rightTrace(row, col) {
  //c => 3, 4, n-1
  while (col < columns.length) {
    insertredColor(row, col);
    col++;
  }
}
function bottomTrace(row, col) {
  //r => 4, 5, ..,n-1
  while (row < rows.length) {
    insertredColor(row, col);
    row++;
  }
}

function topLeftTrace(row, col) {
  while (row >= 0 && col >= 0) {
    insertredColor(row, col);
    row--;
    col--;
  }
}
function topRightTrace(row, col) {
  while (row >= 0 && col < columns.length) {
    insertredColor(row, col);
    row--;
    col++;
  }
}
function bottomLeftTrace(row, col) {
  while (row < rows.length && col >= 0) {
    insertredColor(row, col);
    row++;
    col--;
  }
}
function bottomRightTrace(row, col) {
  while (row < rows.length && col < columns.length) {
    insertredColor(row, col);
    row++;
    col++;
  }
}

function insertredColor(row, col) {
  const cellIdName = (row * 8 + col + 1).toString();

  const element = document.getElementsByClassName(`checkbox-${cellIdName}`);

  element[0].style.backgroundColor = "red";
}

function boardRefresh() {
  cells.forEach((cell) => {
    const cellId = cell.id;
    const rowId = cell.parentNode.id;

    if (rowId % 2 == 0) {
      if (cellId % 2 == 0) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "white";
      }
    } else {
      if (cellId % 2 == 0) {
        cell.style.backgroundColor = "white";
      } else {
        cell.style.backgroundColor = "black";
      }
    }
  });
}
