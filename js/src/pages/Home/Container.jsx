import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import HomePresentation from './Presentation.jsx'

import * as postsActions from '../../ducks/posts.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'
import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx';

class HomeContainer extends React.Component {
  componentDidMount () {
    this.props.postsActions.get()
      .then(response => {
        if (response.status === 200) {
          this.props.postsActions.set(normalizeResponseData(response.data))
        }
      })
  }

  render () {
    console.log('homepage')
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

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)