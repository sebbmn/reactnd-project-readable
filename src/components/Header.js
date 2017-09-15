import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PageHeader, Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

class Header extends Component {

  render() {
    const { categories } = this.props

    return (
      <PageHeader>
        <Navbar collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'><Glyphicon glyph="home" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {categories[0] && categories.map( cat => (
                <IndexLinkContainer key={cat.name}to={`/${cat.path}`}>
                  <NavItem>{cat.name}</NavItem>
                </IndexLinkContainer>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </PageHeader>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}
export default connect(
  mapStateToProps
)(Header)