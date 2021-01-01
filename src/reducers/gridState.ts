const H = 8
const W = 8

function initializeGrid(H: number, W: number): number[][] {
  const grid = []
  for (let y = 0; y < H; y++) {
    const row = []
    for (let x = 0; x < W; x++) {
      row.push(0)
    }
    grid.push(row)
  }
  return grid
}

function addGrid(inputGrid: number[][], addition: number) {
  const grid = []
  for (let y = 0; y < inputGrid.length; y++) {
    const row = []
    for (let x = 0; x < inputGrid[0].length; x++) {
      row.push(inputGrid[y][x] + addition)
    }
    grid.push(row)
  }
  return grid
}

function updateGrid(
  inputGrid: number[][],
  addition: number,
  targetY: number,
  targetX: number
) {
  const grid = []
  for (let y = 0; y < inputGrid.length; y++) {
    const row = []
    for (let x = 0; x < inputGrid[0].length; x++) {
      const v =
        inputGrid[y][x] + (y === targetY && x === targetX ? addition : 0)
      row.push(v)
    }
    grid.push(row)
  }
  return grid
}

const initialState = { values: initializeGrid(H, W) }

export function gridState(state = initialState, action: any): any {
  switch (action.type) {
    case 'GRIDSTATE_ADD':
      return { values: addGrid(state.values, 1) }
    case 'GRIDSTATE_RESET':
      return {
        values: initializeGrid(state.values.length, state.values[0].length),
      }
    case 'GRIDSTATE_UPDATE':
      return {
        values: updateGrid(
          state.values,
          action.payload.addition,
          action.payload.y,
          action.payload.x
        ),
      }
    default:
      return state
  }
}
