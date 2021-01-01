import NavBar from './NavBar'
import { Col, Container, Row } from 'reactstrap'
import Controller from './Controller'
import Display from './Display'
import React from 'react'

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container fluid="true">
        <Row>
          <Col md="3">
            <Controller />
          </Col>
          <Col md="9">
            <Display />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
