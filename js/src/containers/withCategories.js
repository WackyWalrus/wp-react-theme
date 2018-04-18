import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as categoriesActions from '../ducks/categories.js'

import normalizeResponseData from '../utilities/normalizeResponseData.js'

export default function withCategories (WrapperComponent) {

  class With extends React.Component {
    componentDidMount () {
      if (Object.values(this.props.categories.data).length === 0) {
        this.props.categoriesActions.get()
          .then(response => {
            if (response.status === 200) {
              this.props.categoriesActions.set(normalizeResponseData(response.data))
            }
          })
      }
    }
    
    render () {
      const {
        categories
      } = this.props
      
      if (!categories || Object.values(categories.data).length === 0 || categories.fetching === true) {
        return null
      }
      
      return (
        <WrapperComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      categories: state.categories
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      categoriesActions: bindActionCreators(categoriesActions, dispatch)
    }
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(With)

}