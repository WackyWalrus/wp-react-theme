import React from 'react'
import PropTypes from 'prop-types'

import MainTemplate from '../../templates/MainTemplate.jsx'

class PostPresentation extends React.Component {
  render () {
    return (
      <MainTemplate>
        <h2 dangerouslySetInnerHTML={this.title()}></h2>
        <div dangerouslySetInnerHTML={this.markup()} />
      </MainTemplate>
    )
  }

  title () {
    const {
      title
    } = this.props.post

    return {
      __html: title.rendered
    }
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