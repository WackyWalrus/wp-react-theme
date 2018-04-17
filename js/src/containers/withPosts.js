import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as postsActions from '../ducks/posts.js'

import normalizeResponseData from '../utilities/normalizeResponseData.js'

export default function withPosts (WrapperComponent) {

  class With extends React.Component {
    componentDidMount () {
      this.props.postsActions.get()
        .then(response => {
          if (response.status === 200) {
            this.props.postsActions.set(normalizeResponseData(response.data))
          }
        })
    }
    
    render () {
      const {
        posts
      } = this.props

      if (!posts || Object.values(posts.data).length === 0 || posts.fetching === true) {
        return null
      }
      
      return (
        <WrapperComponent {...this.props} />
      )
    }
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
  
  return connect(mapStateToProps, mapDispatchToProps)(With)

}