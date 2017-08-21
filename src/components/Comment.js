import React, { Component } from 'react'
import Content from './Content'

class Comment extends Component {
  render () {
    return (
      <div className='comment'>
        <h1>Comment component</h1>
        <Content></Content>
      </div>
    )
  }
}

export default Comment