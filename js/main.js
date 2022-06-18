'use strict'

var gMax = 16
var gBoardSize = Math.sqrt(gMax)
var gNums = fillNums(gMax)
var gCellNum = 1
var gTime

function renderBoard() {
  var strHTML = ''
  for (var i = 0; i < gBoardSize; i++) {
    strHTML += `<tr>`
    for (var j = 0; j < gBoardSize; j++) {
      var randomNum = shuffle(gNums).pop()
      strHTML += `<td onclick="cellClicked(this,${randomNum})" class="checked">${randomNum}
        </td>`
    }
    strHTML += `</tr>`
  }
  var elBoard = document.querySelector('.table-board')
  elBoard.innerHTML = strHTML
}

function boardSizeDifficulty(boardSize) {
  gMax = boardSize
  gBoardSize = gMax ** 0.5
  gNums = fillNums(gMax)
  renderBoard(gBoardSize)
}

function cellClicked(clickedNum) {
  if (+clickedNum.innerText === gCellNum) {
    gCellNum++
    clickedNum.style.backgroundColor = '#73C8A9'
    if (clickedNum.innerText === '1') {
      gTime = setInterval(countUpTimer, 10)
    }
    if (gCellNum === gMax + 1) {
      alert('You Won!!!')
      clearInterval(gTime)
    }
  } else {
    return
  }
}
