/* eslint-disable no-unused-vars */
import React from 'react'
import { Container } from 'reactstrap'
import Grid from './Grid'

const Display: React.FC = () => {
  const gridProps = { W: 8, H: 8, pxHeight: 50, pxWidth: 50 }

  return (
    <Container className="py-4 mx-4" style={{ maxWidth: 'none' }}>
      <Grid {...gridProps} />
    </Container>
  )
}

export default Display
