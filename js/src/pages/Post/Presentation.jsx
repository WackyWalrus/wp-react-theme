import React from 'react'
import PropTypes from 'prop-types'

import MainTemplate from '../../templates/MainTemplate.jsx'

class PostPresentation extends React.Component {
  render () {
    const {
      post
    } = this.props
    
    return (
      <MainTemplate>
        <h2>{post.title.rendered}</h2>
        <div dangerouslySetInnerHTML={this.markup()} />
      </MainTemplate>
    )
  }

  markup () {
    const {
      content
    } = this.props.post

    return {
      __html: content.rendered
    }
  }
}

PostPresentation.defaultProps = {
  post: {}
}

PostPresentation.propTypes = {
  post: PropTypes.object
}

export default PostPresentation