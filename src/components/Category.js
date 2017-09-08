import React, { Component } from 'react'
import PostsList from './PostsList'

class Category extends Component {
  render () {
    const { match } = this.props

    return (
      <div className='category'>
        <h1>{match.params.categoryName}</h1>
        <PostsList category={match.params.categoryName}></PostsList>
      </div>
    )
  }
}

export default Category