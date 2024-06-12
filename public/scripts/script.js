const scriptTag = document.currentScript
const data = scriptTag.dataset

window.onload = beginFrameReplace();

function beginFrameReplace() {
  let lines = JSON.parse(data.json).lines

  for (row = 0; row < lines.length; row++) {
    for (col = 0; col < lines[row].length; col++) {
      replaceChar(row, col, lines[row][col])
    }
  }
}

function replaceChar(row, col, char) {
    if (char == 'x') {
      char = "&nbsp;"
    }

    let currand = getRandomInt(100) * 50;
    let curclass = ".row" + row + ".col" + col;
    let replaced = "<span class='dark'>" + char + "</span>";

    setTimeout(function() {
      document.querySelector(curclass).outerHTML = replaced
    }, 1500 + currand)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}