import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as postsActions from '../../ducks/posts.js'
import * as pagesActions from '../../ducks/pages.js'
import * as categoriesActions from '../../ducks/categories.js'

import slugSelector from '../../selectors/slugSelector.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

import DeterminePresentation from './Presentation.jsx'

class DetermineContainer extends React.Component {
  componentDidMount () {
    this.props.postsActions.get()
      .then(response => {
        this.props.postsActions.set(normalizeResponseData(response.data))
      })
    this.props.pagesActions.get()
      .then(response => {
        this.props.pagesActions.set(normalizeResponseData(response.data))
      })
    this.props.categoriesActions.get()
      .then(response => {
        this.props.categoriesActions.set(response.data)
      })
  }
  
  render () {
    return (
      <DeterminePresentation post={this.props.post} />
    )
  }
}

DetermineContainer.defaultProps = {
  post: {}
}

const mapStateToProps = (state, props) => {
  return {
    pages: state.pages,
    posts: state.posts,
    categories: state.categories,
    post: slugSelector(state, props.match.params.permalink)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch),
    categoriesActions: bindActionCreators(categoriesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetermineContainer)