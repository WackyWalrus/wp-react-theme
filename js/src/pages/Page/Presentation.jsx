import React from 'react'
import PropTypes from 'prop-types'

import MainTemplate from '../../templates/MainTemplate.jsx'

class PagePresentation extends React.Component {
  render () {
    const {
      page
    } = this.props
    
    return (
      <MainTemplate>
        <h2>{page.title.rendered}</h2>
        <div dangerouslySetInnerHTML={this.markup()} />
      </MainTemplate>
    )
  }

  markup () {
    const {
      content
    } = this.props.page

    return {
      __html: content.rendered
    }
  }
}

PagePresentation.defaultProps = {
  page: {}
}

PagePresentation.propTypes = {
  page: {}
}

export default PagePresentation