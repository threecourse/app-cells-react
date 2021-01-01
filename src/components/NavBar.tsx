/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import styles from './NavBar.module.css'

const NavbarComponent: React.FC = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className={styles['navbar-brand']}>
          React Simple Cells
        </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
