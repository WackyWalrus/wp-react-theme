import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

import HeaderContainer from '../components/Header/Container.jsx'
import FooterContainer from '../components/Footer/Container.jsx'
import CategoryListContainer from '../components/CategoryList/Container.jsx'

import * as siteInfoActions from '../ducks/siteInfo.js'
import * as postsActions from '../ducks/posts.js'
import * as categoriesActions from '../ducks/categories.js'

import headerDataSelector from '../selectors/headerDataSelector.js'
import normalizeResponseData from '../utilities/normalizeResponseData.js'

class TwoColumnTemplate extends React.Component {
  componentDidMount () {
    this.props.siteInfoActions.get()
      .then(response => {
        if (response.status === 200) {
          this.props.siteInfoActions.set(response.data)
        }
      })
    
    this.props.categoriesActions.get()
      .then(response => {
        if (response.status === 200) {
          this.props.categoriesActions.set(response.data)
        }
      })
  }
  
  render () {
    const {
      categories
    } = this.props

    return (
      <Container fluid>
        <HeaderContainer {...this.props.headerData} />
        
        <Row>
          <Col md={8}>
            {this.props.children}
          </Col>
          <Col md={4}>
            <CategoryListContainer
              wrapper={ListGroup}
              item={ListGroupItem} />
          </Col>
        </Row>

        <FooterContainer />
      </Container>
    )
  }
}

TwoColumnTemplate.defaultProps = {
  categories: []
}

const mapStateToProps = (state) => {
  return {
    headerData: headerDataSelector(state),
    categories: state.categories.data
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    siteInfoActions: bindActionCreators(siteInfoActions, dispatch),
    postsActions: bindActionCreators(postsActions, dispatch),
    categoriesActions: bindActionCreators(categoriesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TwoColumnTemplate)