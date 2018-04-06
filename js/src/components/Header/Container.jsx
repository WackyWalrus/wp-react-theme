import React from 'react'

import HeaderPresentation from './Presentation.jsx'

class HeaderContainer extends React.Component {
  render () {
    return (
      <HeaderPresentation {...this.props} />
    )
  }
}

export default HeaderContainer