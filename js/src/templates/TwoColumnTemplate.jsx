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

import withSiteInfo from '../containers/withSiteInfo.js'

import HeaderContainer from '../components/Header/Container.jsx'
import FooterContainer from '../components/Footer/Container.jsx'
import CategoryListContainer from '../components/CategoryList/Container.jsx'

import * as postsActions from '../ducks/posts.js'

import headerDataSelector from '../selectors/headerDataSelector.js'

class TwoColumnTemplate extends React.Component {
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

const mapStateToProps = (state) => {
  return {
    headerData: headerDataSelector(state)
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    postsActions: bindActionCreators(postsActions, dispatch)
  }
}

export default withSiteInfo (
  connect(mapStateToProps, mapDispatchtoProps)(TwoColumnTemplate)
)