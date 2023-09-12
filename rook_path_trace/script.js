const cells = document.querySelectorAll(".checkbox");

const rows = document.querySelectorAll(".row");

const columns = rows[0].querySelectorAll(".checkbox");

cells.forEach((cell) => {
  cell.textContent = cell.id;

  cell.classList.add(`checkbox-${cell.id}`);

  cell.addEventListener("click", () => {
    // cells.forEach((c) => c.classList.remove("trace"));
    boardRefresh();
    const cellId = cell.id - 1;
    cell.style.backgroundColor = "red";

    const row = Math.floor(cellId / rows.length);
    const col = cellId % columns.length;

    topTrace(row - 1, col);
    leftTrace(row, col - 1);
    rightTrace(row, col + 1);
    bottomTrace(row + 1, col);
  });
});

function topTrace(row, col) {
  while (row >= 0) {
    insertTraceColor(row, col);

    row--;
  }
}
function leftTrace(row, col) {
  while (col >= 0) {
    insertTraceColor(row, col);
    col--;
  }
}
function rightTrace(row, col) {
  while (col < columns.length) {
    insertTraceColor(row, col);
    col++;
  }
}
function bottomTrace(row, col) {
  while (row < rows.length) {
    insertTraceColor(row, col);

    row++;
  }
}

function insertTraceColor(row, col) {
  const cellIdName = (row * 8 + col + 1).toString();

  const elements = document.getElementsByClassName(`checkbox-${cellIdName}`);

  elements[0].style.backgroundColor = "red";
}

function boardRefresh() {
  for (let i = 0; i < cells.length; i++) {
    console.log("cells[i]", cells[i]);
    let boxId = Number(cells[i]["id"]);
    let rowId = Number(cells[i].parentNode.id);
    if (rowId % 2 == 0) {
      if (boxId % 2 != 0) {
        cells[i].style.backgroundColor = "white";
      } else {
        cells[i].style.backgroundColor = "black";
      }
    } else {
      if (boxId % 2 == 0) {
        cells[i].style.backgroundColor = "white";
      } else {
        cells[i].style.backgroundColor = "black";
      }
    }
  }
}
