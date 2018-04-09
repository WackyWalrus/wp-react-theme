import React from 'react'
import { Link } from 'react-router-dom'

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

class HeaderPresentation extends React.Component {
  state = {
    isOpen: false
  }

  render () {
    const {
      name,
      description
    } = this.props

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">{name} <span>{description}</span></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.props.pages.map((page, index) => {
              return (
                <NavItem key={`page-link-${index}`}>
                  <NavLink tag={Link} to={`/${page.slug}/`}>{page.title.rendered}</NavLink>
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default HeaderPresentation