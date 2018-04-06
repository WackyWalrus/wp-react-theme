import React from 'react'

import MainTemplate from '../../templates/MainTemplate.jsx'
import PostContainer from '../../components/Post/Container.jsx'

class HomePresentation extends React.Component {
  render () {
    const {
      posts
    } = this.props
    
    return (
      <MainTemplate>
        
        {posts.map((post, index) => {
          return (
            <PostContainer post={post} key={index} />
          )
        })}
        
      </MainTemplate>
    )
  }
}

export default HomePresentation