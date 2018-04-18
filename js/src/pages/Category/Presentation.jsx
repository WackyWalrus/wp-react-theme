import React from 'react'
import PropTypes from 'prop-types'

import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx'

import PostContainer from '../../components/Post/Container.jsx'

class CategoryPresentation extends React.Component {
  render () {
    const {
      posts
    } = this.props
    
    return (
      <TwoColumnTemplate>
        {posts.map((post, index) => {
            return (
              <PostContainer
                key={`post-container-${index}`}
                post={post} />
            )
          })}
      </TwoColumnTemplate>
    )
  }
}

CategoryPresentation.defaultProps = {
  posts: []
}

CategoryPresentation.propTypes = {
  posts: PropTypes.array
}

export default CategoryPresentation