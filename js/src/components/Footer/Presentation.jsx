import React from 'react'

class FooterPresentation extends React.Component {
  render () {
    return (
      <div>&copy; Chris McCullough {new Date().getFullYear()}</div>
    )
  }
}

export default FooterPresentation