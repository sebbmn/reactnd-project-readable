import React, { Component } from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { addContent, updateContent, deleteContent } from '../actions'

class Post extends Component {
  render () {
    const {posts} = this.props

    return (
      <div className='post'>
        <h1>Post component</h1>
        {posts[0] && posts.map((post) => (
          <div key={post.id}>
            <h1 key={post.id}>{post.title}</h1>
            <h2>Author: {post.author}</h2>
            <div key={post.id+post.id}>{post.body}</div>
          </div>
        ))}
        <Content></Content>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  }
}

function mapDispatchToProps (dispatch) {
  return { 
    add: (data) => dispatch(addContent(data)),
    update: (data) => dispatch(updateContent(data)),
    delete: (data) => dispatch(deleteContent(data)) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)