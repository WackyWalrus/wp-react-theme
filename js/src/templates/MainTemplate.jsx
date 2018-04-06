import React from 'react'
import PropTypes from 'prop-types'

import {
  Container
} from 'reactstrap'

import HeaderContainer from '../components/Header/Container.jsx'
import FooterContainer from '../components/Footer/Container.jsx'

class MainTemplate extends React.Component {
  render () {
    return (
      <Container fluid>
        <HeaderContainer />

        {this.props.children}
        
        <FooterContainer />
      </Container>
    )
  }
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainTemplate