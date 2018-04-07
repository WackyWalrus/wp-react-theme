import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as postsActions from '../../ducks/posts.js'
import * as pagesActions from '../../ducks/pages.js'

import DeterminePresentation from './Presentation.jsx'

class DetermineContainer extends React.Component {
  componentDidMount () {
    this.props.postsActions.get()
    this.props.pagesActions.get()
  }
  
  render () {
    return (
      <DeterminePresentation />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetermineContainer)