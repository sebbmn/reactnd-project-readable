import React, { Component } from 'react'
import PostsList from './PostsList'

class Category extends Component {
  render () {
    const { match } = this.props

    return (
      <div className='category'>
        <h1>{match.params.category}</h1>
        <PostsList category={match.params.category}></PostsList>
      </div>
    )
  }
}

export default Category