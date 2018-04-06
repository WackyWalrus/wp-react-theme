import React from 'react'

class PostPresentation extends React.Component {
  render () {
    const {
      id,
      title
    } = this.props
    
    return (
      <div>
        <h2>{title.rendered}</h2>
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