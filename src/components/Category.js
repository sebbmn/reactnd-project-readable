import React, { Component } from 'react'
import PostsList from './PostsList'

class Category extends Component {
  render () {
    const { match } = this.props

    return (
      <PostsList category={match.params.category}></PostsList>
    )
  }
}
export default Category