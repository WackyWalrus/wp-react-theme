import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CategoryPresentation from './Presentation.jsx'
import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx'

import * as postsActions from '../../ducks/posts.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

class CategoryContainer extends React.Component {
  componentDidMount () {
    this.props.postsActions.get()
      .then(response => {
        if (response.status === 200) {
          this.props.postsActions.set(normalizeResponseData(response.data))
        }
      })
  }

  render () {
    console.log('test')
    return (
      <TwoColumnTemplate>
        <CategoryPresentation posts={Object.values(this.props.posts.data)} />
      </TwoColumnTemplate>
    )
  }
}

CategoryContainer.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)