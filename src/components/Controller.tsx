/* eslint-disable no-unused-vars */
import React from 'react'
import { Container, Row, Button, Col } from 'reactstrap'
import { useDispatch } from 'react-redux'

const Controller: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Container className="py-4 mx-4">
      <Row className="my-2 align-items-center">
        <Col xs="auto" className="px-0 mx-1">
          <Button
            color="secondary"
            onClick={() => {
              dispatch({ type: 'GRIDSTATE_RESET' })
            }}
          >
            Reset Cells
          </Button>
        </Col>
        <Col xs="auto" className="px-0 mx-1">
          <Button
            color="primary"
            onClick={() => {
              dispatch({ type: 'GRIDSTATE_ADD' })
            }}
          >
            Add 1 to each Cell
          </Button>
        </Col>
      </Row>
      <Row className="my-2 align-items-center px-1 py-3">
        {'Click Cell → Add 10 to the cell'}
      </Row>
    </Container>
  )
}

export default Controller
