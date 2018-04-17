import React from 'react'
import Route from 'react-router-dom'

import PageContainer from '../Page/Container.jsx'
import PostContainer from '../Post/Container.jsx'
import CategoryContainer from '../Category/Container.jsx'

class DeterminePresentation extends React.Component {
  render () {
    const {
      current,
      loading
    } = this.props
    
    const {
      type,
      data
    } = current

    if (type === 'page') {
      return (
        <PageContainer
          loading={loading}  
          page={data[0]} />
      )
    }

    if (type === 'post') {
      return (
        <PostContainer
          loading={loading}
          post={data[0]} />
      )
    }

    if (type === 'category') {
      return (
        <CategoryContainer
          loading={loading}
          category={data[0]} />
      )
    }

    return null
  }
}

export default DeterminePresentation