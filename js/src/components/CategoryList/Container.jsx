import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import normalizeResponseData from '../../utilities/normalizeResponseData.js'

import withCategories from '../../containers/withCategories.js'

import CategoryListPresentation from './Presentation.jsx'

class CategoryListContainer extends React.Component {
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default withCategories (
  connect(mapStateToProps)(CategoryListContainer)
)