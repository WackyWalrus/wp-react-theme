import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'

class PostPresentation extends React.Component {
  render () {
    const {
      id,
      slug,
      author,
      date,
      user
    } = this.props
    
    return (
      <div className='post'>
        <div className='post-meta'>
          <h2><Link to={`/${slug}/`} dangerouslySetInnerHTML={this.title()}></Link></h2>
          <span>{moment(date).format('MM/DD/YYYY')} | {user.name}</span>
        </div>
        <div
          className='post-content'
          dangerouslySetInnerHTML={this.markup()} />
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

PostPresentation.defaultValues = {
  user: {
    name: ''
  }
}

export default PostPresentation