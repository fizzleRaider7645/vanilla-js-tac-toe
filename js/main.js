const gameState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const postions = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
]

const initializeBoard = () => {
  const body = document.getElementById('body')
  body.style =
    'display: flex;align-items: center;justify-content: center;margin: 0;height: 100%;'
  const board = document.getElementById('board')
  board.style = 'border: none;border-style: none;'

  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div')
    let rowStyle = 'width:100%;height:100px;display:flex;'
    if (i < 2) {
      row.style = rowStyle += 'border-bottom: 3px solid black;'
    } else {
      row.style = rowStyle
    }
    board.appendChild(row)
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div')
      if (j === 0) {
        cell.style =
          'width:100px;border-right: 3px solid black;display:flex;border-left: none;justify-content: center;align-items: center;'
      } else if (j === 1) {
        cell.style =
          'width:100px;border-right: 3px solid black;display:flex;justify-content: center;align-items: center;'
      } else {
        cell.style =
          'width:100px;display:flex;justify-content: center;align-items: center;'
      }
      const cellId = [i, j]
      cell.id = cellId
      cell.innerHTML = gameState[i][j]
      cell.onclick = () => placeToken(cellId)
      row.appendChild(cell)
    }
    board.appendChild(row)
  }
}

const placeToken = ([i, j]) => {
  gameState[i][j] = 'X'
  document.getElementById('board').innerHTML = ''
  initializeBoard()
}

initializeBoard()
