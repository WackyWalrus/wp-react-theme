import React from 'react'

class FooterPresentation extends React.Component {
  render () {
    return (
      <div>
        <hr />
        <p>&copy; Chris McCullough {new Date().getFullYear()}</p>
      </div>
    )
  }
}

export default FooterPresentation