import React from 'react'

import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx'
import PostContainer from '../../components/Post/Container.jsx'

class HomePresentation extends React.Component {
  render () {
    const {
      posts
    } = this.props
    
    return (
      <TwoColumnTemplate>
        
        {posts.map((post, index) => {
          return (
            <PostContainer post={post} key={index} />
          )
        })}
        
      </TwoColumnTemplate>
    )
  }
}

export default HomePresentation