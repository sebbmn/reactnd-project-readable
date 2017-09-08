import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

class Header extends Component {

  render() {
    const { categories } = this.props

    return (
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Here the api test for now...
        </p>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
          {categories[0] && categories.map( cat => (
            <nav>
              <Link key={cat.name} to={`/category/${cat.path}`}>{cat.name}</Link>
            </nav>
          ))}
      </header>
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