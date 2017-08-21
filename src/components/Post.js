import React, { Component } from 'react'
import Content from './Content'

class Post extends Component {
  render () {
    return (
      <div className='post'>
        <h1>Post component</h1>
        <Content></Content>
      </div>
    )
  }
}

export default Post