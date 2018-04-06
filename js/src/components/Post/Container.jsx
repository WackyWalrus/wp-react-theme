import React from 'react'

import PostPresentation from './Presentation.jsx'

class PostContainer extends React.Component {
  render () {
    return (
      <PostPresentation {...this.props.post} />
    )
  }
}

PostContainer.defaultProps = {
  post: {}
}

export default PostContainer