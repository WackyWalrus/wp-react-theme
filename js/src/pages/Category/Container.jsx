import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import CategoryPresentation from './Presentation.jsx'
import TwoColumnTemplate from '../../templates/TwoColumnTemplate.jsx'

import * as postsActions from '../../ducks/posts.js'
import * as categoriesActions from '../../ducks/categories.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

class CategoryContainer extends React.Component {
  componentDidMount () {
    this.getCategoryPosts()
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.match.params.category !== prevProps.match.params.category) {
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

  getCategoryPosts = () => {
    this.props.categoriesActions.get()
      .then(response => {
        this.props.categoriesActions.set(normalizeResponseData(response.data))

        let category = this.props.categories.data[this.props.match.params.category]

        if (category) {
          this.props.postsActions.get({
            categories: category.id
          }).then(response => {
            this.props.postsActions.set(normalizeResponseData(response.data))
          })
        }
      })
  }
}

CategoryContainer.defaultProps = {
  posts: []
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch),
    categoriesActions: bindActionCreators(categoriesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)