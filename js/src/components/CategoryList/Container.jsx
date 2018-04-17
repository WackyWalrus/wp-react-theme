import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

import * as categoriesActions from '../../ducks/categories.js'

import CategoryListPresentation from './Presentation.jsx'

class CategoryListContainer extends React.Component {
  componentDidMount () {
    this.props.categoriesActions.get()
      .then(response => {
        this.props.categoriesActions.set(normalizeResponseData(response.data))
      })
  }

  render () {
    return (
      <CategoryListPresentation
        categories={Object.values(this.props.categories.data)} />
    )
  }
}

CategoryListContainer.defaultProps = {
  wrapper: 'ul',
  item: 'li'
}

CategoryListContainer.propTypes = {
  wrapper: PropTypes.node,
  item: PropTypes.node
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer)