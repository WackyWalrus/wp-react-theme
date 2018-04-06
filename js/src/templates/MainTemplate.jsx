import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  Container
} from 'reactstrap'

import HeaderContainer from '../components/Header/Container.jsx'
import FooterContainer from '../components/Footer/Container.jsx'

import * as siteInfoActions from '../ducks/siteInfo.js'

import headerDataSelector from '../selectors/headerDataSelector.js'

class MainTemplate extends React.Component {
  componentDidMount () {
    this.props.siteInfoActions.get()
      .then(response => {
        if (response.status === 200) {
          this.props.siteInfoActions.set(response.data)
        }
      })
  }
  
  render () {
    return (
      <Container fluid>
        <HeaderContainer {...this.props.headerData} />

        {this.props.children}
        
        <FooterContainer />
      </Container>
    )
  }
}

MainTemplate.defaultProps = {
  headerData: {
    name: '',
    description: ''
  }
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

const mapStateToProps = (state) => {
  return {
    headerData: headerDataSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    siteInfoActions: bindActionCreators(siteInfoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTemplate)