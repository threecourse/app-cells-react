import React from 'react'
import Cell from './Cell'
import { useSelector, useDispatch } from 'react-redux'

type Props = {
  W: number
  H: number
  pxHeight: number
  pxWidth: number
}

const Grid: React.FC<Props> = (prop) => {
  const values = useSelector((state: any) => state.gridState.values)
  const dispatch = useDispatch()

  const grids = []
  for (let y = 0; y < prop.H; y++) {
    for (let x = 0; x < prop.W; x++) {
      const props = {
        isRightEnd: x === prop.W - 1,
        isBottom: y === prop.H - 1,
        top: prop.pxHeight * y,
        left: prop.pxWidth * x,
        height: prop.pxHeight,
        width: prop.pxWidth,
        content: `${values[y][x]}`,
        onClick: () => {
          dispatch({
            type: 'GRIDSTATE_UPDATE',
            payload: { addition: 10, y: y, x: x },
          })
        },
        additionalClasses: ['main-cell'],
        key: y * prop.W + x,
      }
      grids.push(<Cell {...props} />)
    }
  }

  return <div style={{ position: 'relative' }}> {grids} </div>
}

export default Grid
