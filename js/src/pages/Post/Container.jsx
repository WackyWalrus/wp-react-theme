import React from 'react'
import PropTypes from 'prop-types'

import PostPresentation from './Presentation.jsx'

class PostContainer extends React.Component {
  render () {
    const {
      post
    } = this.props

    return (
      <PostPresentation post={post} />
    )
  }
}

PostContainer.defaultProps = {
  post: {}
}

PostContainer.propTypes = {
  post: PropTypes.object
}

export default PostContainer