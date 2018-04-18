import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as postsActions from '../ducks/posts.js'

import normalizeResponseData from '../utilities/normalizeResponseData.js'

export default function withPosts (WrapperComponent) {

  class With extends React.Component {
    componentDidMount () {
      this.getPosts()
    }

    componentDidUpdate (prevProps) {
      if (prevProps.match.params.category !== this.props.match.params.category) {
        this.getPosts()
      }
    }
    
    render () {
      const {
        posts
      } = this.props

      if (!posts || posts.fetching === true) {
        return null
      }
      
      return (
        <WrapperComponent {...this.props} />
      )
    }

    getPosts () {
      const {
        match,
        categories
      } = this.props
      
      this.props.postsActions.get(
        match.params.category ?
        { categories: categories.data[match.params.category].id } :
        null
      ).then(response => {
          if (response.status === 200) {
            this.props.postsActions.set(normalizeResponseData(response.data))
          }
        })
    }
  }

  const mapStateToProps = (state) => {
    return {
      posts: state.posts,
      categories: state.categories
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      postsActions: bindActionCreators(postsActions, dispatch)
    }
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(With)

}