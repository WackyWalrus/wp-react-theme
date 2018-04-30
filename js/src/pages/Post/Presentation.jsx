import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import MainTemplate from '../../templates/MainTemplate.jsx'

class PostPresentation extends React.Component {
  render () {
    const {
      slug,
      date,
      user
    } = this.props
    
    return (
      <MainTemplate>
        <div className='post'>
          <div className='post-meta'>
            <h2 dangerouslySetInnerHTML={this.title()} />
            <span>{moment(date).format('MM/DD/YYYY')} | {user.name}</span>
          </div>
          <div
            className='post-content'
            dangerouslySetInnerHTML={this.markup()} />
        </div>
      </MainTemplate>
    )
  }

  title () {
    const {
      title
    } = this.props

    return {
      __html: title.rendered
    }
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

PostPresentation.defaultProps = {
  post: {}
}

PostPresentation.propTypes = {
  post: PropTypes.object
}

export default PostPresentation