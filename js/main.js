const board = document.getElementById('board')

board.style = 'border: none;border-style: none;'

for (let i = 0; i < 3; i++) {
  const row = document.createElement('div')
  if (i < 2) {
    row.style =
      'width:100%;height:100px;display:flex;border-bottom: 3px solid black;'
  } else {
    row.style = 'width:100%;height:100px;display:flex;'
  }
  board.appendChild(row)
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement('div')
    if (j === 0) {
      cell.style =
        'width:100px;border-right: 3px solid black;border-left: none;'
    } else if (j === 1) {
      cell.style = 'width:100px;border-right: 3px solid black;'
    } else {
      cell.style = 'width:100px;'
    }

    cell.innerHTML = `${[i, j]}`
    row.appendChild(cell)
  }
  board.appendChild(row)
}
