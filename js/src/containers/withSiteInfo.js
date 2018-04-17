import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as siteInfoActions from '../ducks/siteInfo.js'

export default function withSiteInfo (WrapperComponent) {
  
  class With extends React.Component {
    componentDidMount () {
      this.props.siteInfoActions.get()
        .then(response => {
          if (response.status === 200) {
            this.props.siteInfoActions.set(response.data)
          }
        })
    }
    
    render () {
      const {
        siteInfo
      } = this.props

      if (!siteInfo || Object.values(siteInfo.data).length === 0 || siteInfo.fetching === true) {
        return null
      }
      
      return (
        <WrapperComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      siteInfo: state.siteInfo
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      siteInfoActions: bindActionCreators(siteInfoActions, dispatch)
    }
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(With)
}