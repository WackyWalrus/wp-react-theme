import React from 'react'
import { Link } from 'react-router-dom'

class PostPresentation extends React.Component {
  render () {
    const {
      id,
      slug
    } = this.props
    
    return (
      <div>
        <h2><Link to={`/${slug}/`} dangerouslySetInnerHTML={this.title()}></Link></h2>
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

  title () {
    const {
      title
    } = this.props

    return {
      __html: title.rendered
    }
  }
}

export default PostPresentation