import React from 'react'
import PropTypes from 'prop-types'

import PostContainer from '../../components/Post/Container.jsx'

class CategoryPresentation extends React.Component {
  render () {
    const {
      posts
    } = this.props
    
    return posts.map((post, index) => {
      return (
        <PostContainer
          key={`post-container-${index}`}
          post={post} />
      )
    })
  }
}

CategoryPresentation.defaultProps = {
  posts: []
}

CategoryPresentation.propTypes = {
  posts: PropTypes.array
}

export default CategoryPresentation