import React from 'react'
import { Link } from 'react-router-dom'

class PostPresentation extends React.Component {
  render () {
    const {
      id,
      title,
      slug
    } = this.props
    
    return (
      <div>
        <h2><Link to={`/${slug}/`}>{title.rendered}</Link></h2>
        <div dangerouslySetInnerHTML={this.markup()} />
      </div>
    )
  }

  markup () {
    const {
      content
    } = this.props
    
    return {
      __html: content.rendered
    }
  }
}

export default PostPresentation