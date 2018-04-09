import React from 'react'
import PropTypes from 'prop-types'

import PagePresentation from './Presentation.jsx'

class PageContainer extends React.Component {
  render () {
    const {
      page
    } = this.props

    return (
      <PagePresentation page={page} />
    )
  }
}

PageContainer.defaultProps = {
  page: {}
}

PageContainer.propTypes = {
  page: PropTypes.object
}

export default PageContainer