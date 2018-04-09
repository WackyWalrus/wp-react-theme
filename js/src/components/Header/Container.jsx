import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as pagesActions from '../../ducks/pages.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

import HeaderPresentation from './Presentation.jsx'

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.pagesActions.get()
      .then(response => {
        this.props.pagesActions.set(normalizeResponseData(response.data))
      })
  }
  
  render () {
    return (
      <HeaderPresentation {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: Object.values(state.pages.data)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pagesActions: bindActionCreators(pagesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)