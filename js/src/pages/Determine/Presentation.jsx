import React from 'react'
import Route from 'react-router-dom'

import PageContainer from '../Page/Container.jsx'
import PostContainer from '../Post/Container.jsx'
import CategoryContainer from '../Category/Container.jsx'

class DeterminePresentation extends React.Component {
  render () {
    const {
      type,
      data
    } = this.props.current

    if (type === 'page') {
      return (
        <PageContainer page={data[0]} />
      )
    }

    if (type === 'post') {
      return (
        <PostContainer post={data[0]} />
      )
    }

    if (type === 'category') {
      return (
        <CategoryContainer category={data[0]} />
      )
    }

    return null
  }
}

export default DeterminePresentation