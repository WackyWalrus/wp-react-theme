import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import CategoryPresentation from './Presentation.jsx'
import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx'

import * as postsActions from '../../ducks/posts.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

class CategoryContainer extends React.Component {
  componentDidMount () {
    this.getCategoryPosts()
  }

  componentDidUpdate (prevProps) {
    if (this.props.category.id !== prevProps.category.id) {
      this.getCategoryPosts()
    }
  }
  
  render () {
    return (
      <TwoColumnTemplate>
        <CategoryPresentation posts={Object.values(this.props.posts.data)} />
      </TwoColumnTemplate>
    )
  }
  
  getCategoryPosts () {
    this.props.postsActions.get({
      categories: this.props.category.id
    })
      .then(response => {
        if (response.status === 200) {
          this.props.postsActions.set(normalizeResponseData(response.data))
        }
      })
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