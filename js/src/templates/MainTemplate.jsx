import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import withSiteInfo from '../containers/withSiteInfo.js'

import {
  Container
} from 'reactstrap'

import HeaderContainer from '../components/Header/Container.jsx'
import FooterContainer from '../components/Footer/Container.jsx'

import * as postsActions from '../ducks/posts.js'

import headerDataSelector from '../selectors/headerDataSelector.js'

class MainTemplate extends React.Component {
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
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default withSiteInfo (
  connect(mapStateToProps, mapDispatchToProps)(MainTemplate)
)