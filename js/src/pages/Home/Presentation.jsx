import React from 'react'

import PostContainer from '../../components/Post/Container.jsx'

class HomePresentation extends React.Component {
  render () {
    const {
      posts
    } = this.props
    
    return posts.map((post, index) => {
      return (
        <PostContainer post={post} key={index} />
      )
    })
  }
}

export default HomePresentation