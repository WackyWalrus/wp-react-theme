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
import * as postsActions from '../ducks/posts.js'

import headerDataSelector from '../selectors/headerDataSelector.js'

class TwoColumnTemplate extends React.Component {
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

const mapStateToProps = (state) => {
  return {
    headerData: headerDataSelector(state)
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    siteInfoActions: bindActionCreators(siteInfoActions, dispatch),
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TwoColumnTemplate)