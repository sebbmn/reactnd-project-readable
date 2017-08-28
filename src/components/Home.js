import React, { Component } from 'react'
import PostsList from './PostsList'
import { Route } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <PostsList></PostsList>
    )
  }
}

export default Home