import React from 'react'

import PageContainer from '../Page/Container.jsx'
import PostContainer from '../Post/Container.jsx'

class DeterminePresentation extends React.Component {
  render () {
    const {
      post
    } = this.props
    
    if (post.type === 'page') {
      return (
        <PageContainer page={post} />
      )
    }

    if (post.type === 'post') {
      return (
        <PostContainer post={post} />
      )
    }

    return null
  }
}

export default DeterminePresentation