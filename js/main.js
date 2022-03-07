let turns = 0

const tokens = ['X', 'O']

const gameState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const clearGameState = () => {
  for (let i = 0; i < gameState.length; i++) {
    for (let j = 0; j < gameState[i].length; j++) {
      gameState[i][j] = ''
    }
  }
  turns = 0
}

const updateGameState = ([i, j], token) => {
  gameState[i][j] = token
}

const getGameStateValue = ([i, j]) => {
  return gameState[i][j]
}

const winCombinations = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
]

const winner = () => {
  let isWinner = false
  winCombinations.forEach((combo) => {
    const winConditionMet =
      getGameStateValue(combo[0]) !== '' &&
      getGameStateValue(combo[0]) === getGameStateValue(combo[1]) &&
      getGameStateValue(combo[1]) === getGameStateValue(combo[2])
    if (winConditionMet) {
      isWinner = getGameStateValue(combo[0])
    }
  })
  return isWinner
}

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
          'width:100px;border-right: 3px solid black;display:flex;justify-content:center;align-items: center;'
      } else {
        cell.style =
          'width:100px;display:flex;justify-content: center;align-items: center;'
      }
      const cellId = [i, j]
      cell.id = cellId
      cell.innerHTML = gameState[i][j]
      cell.onclick = () => play(cellId)
      row.appendChild(cell)
    }
    board.appendChild(row)
  }
}

const isDraw = () => {
  return turns === 8 && !winner()
}

const play = ([i, j]) => {
  if (getGameStateValue([i, j])) return
  turns += 1
  const currentUserToken = turns % 2 !== 0 ? tokens[0] : tokens[1]
  updateGameState([i, j], currentUserToken)
  document.getElementById('board').innerHTML = ''
  initializeBoard()

  if (isDraw()) {
    alert('Draw!')
    clearGameState()
    document.getElementById('board').innerHTML = ''
    initializeBoard()
  }
  const winningToken = winner()
  if (winningToken) {
    alert(`${winningToken} Wins!`)
    clearGameState()
    document.getElementById('board').innerHTML = ''
    initializeBoard()
  }
}

initializeBoard()
