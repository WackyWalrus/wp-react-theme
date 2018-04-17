import React from 'react'
import { Link } from 'react-router-dom'


import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'

class CategoryListPresentation extends React.Component {
  render () {
    const {
      categories
    } = this.props

    return (
      <ListGroup>
        {categories.map((category, index) => {
          return (
            <ListGroupItem
              key={`category-${index}`}
              tag={Link}
              to={`/category/${category.slug}`} >
              {category.name}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )
  }
}

export default CategoryListPresentation