import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import * as postsActions from '../../ducks/posts.js'
import * as pagesActions from '../../ducks/pages.js'
import * as categoriesActions from '../../ducks/categories.js'
import * as currentActions from '../../ducks/current.js'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

import DeterminePresentation from './Presentation.jsx'

class DetermineContainer extends React.Component {
  componentDidMount () {
    this.props.currentActions.set({}, '')
    this.getPost()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.url !== this.props.match.url) {
      this.getPost()
    }
  }
  
  render () {
    const {
      current,
      posts,
      categories,
      pages
    } = this.props

    return (
      <DeterminePresentation 
        current={current}
        loading={posts.fetching || categories.fetching || pages.fetching} />
    )
  }

  getPost () {
    this.props.postsActions.get({
      slug: this.props.match.params.permalink
    }).then(response => {
      if (response.status === 200) {
        this.props.postsActions.fetching(false)

        if (response.data.length === 0) {
          this.getPage()
        } else {
          this.props.currentActions.set(response.data, 'post')
        }
      }
    })
  }

  getPage () {
    this.props.pagesActions.get({
      slug: this.props.match.params.permalink
    }).then(response => {
      this.props.pagesActions.fetching(false)

      if (response.data.length === 0) {
        this.getCategory()
      } else {
        this.props.currentActions.set(response.data, 'page')
      }
    })
  }

  getCategory () {
    this.props.categoriesActions.get({
      slug: this.props.match.params.permalink
    }).then(response => {
      this.props.categoriesActions.fetching(false)

      if (response.data.length === 0) {
        this.getCategory()
      } else {
        this.props.currentActions.set(response.data, 'category')
      }
    })
  }
}

DetermineContainer.defaultProps = {
  post: {}
}

const mapStateToProps = (state, props) => {
  return {
    pages: state.pages,
    posts: state.posts,
    categories: state.categories,
    current: state.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch),
    categoriesActions: bindActionCreators(categoriesActions, dispatch),
    currentActions: bindActionCreators(currentActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetermineContainer))