import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import withCategories from '../../containers/withCategories.js'
import withPosts from '../../containers/withPosts.js'

import CategoryPresentation from './Presentation.jsx'

class CategoryContainer extends React.Component {
  render () {
    return (
      <CategoryPresentation posts={Object.values(this.props.posts.data)} />
    )
  }
}

CategoryContainer.defaultProps = {
  posts: {}
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default withCategories (
  withPosts (
    connect(mapStateToProps)(CategoryContainer)
  )
)