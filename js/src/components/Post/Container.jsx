import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

import * as usersActions from '../../ducks/users.js'

import PostPresentation from './Presentation.jsx'

class PostContainer extends React.Component {
  componentDidMount () {
    this.props.usersActions.get({
      id: this.props.post.author
    }).then(response => {
      this.props.usersActions.append(normalizeResponseData(response.data, 'id'))
    })
  }
  
  render () {
    const {
      post,
      users
    } = this.props
    
    if (Object.keys(users.data).length === 0 || users.fetching === true) {
      return null
    }

    return (
      <PostPresentation
        {...post}
        user={users.data[post.author]} />
    )
  }
}

PostContainer.defaultProps = {
  post: {}
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)