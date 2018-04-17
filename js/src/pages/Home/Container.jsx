import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import withPosts from '../../containers/withPosts.js'

import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx'

import HomePresentation from './Presentation.jsx'

class HomeContainer extends React.Component {
  render () {
    return (
      <TwoColumnTemplate>
        <HomePresentation posts={Object.values(this.props.posts.data)} />
      </TwoColumnTemplate>
    )
  }
}

HomeContainer.defaultProps = {
  posts: []
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default withRouter (
  withPosts (
    connect(mapStateToProps)(HomeContainer)
  )
)