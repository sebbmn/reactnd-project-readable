import React, { Component } from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContent, updateContent, deleteContent } from '../actions'

class PostsList extends Component {
  render () {
    const {posts} = this.props

    return (
      <ul className='post'>
        <h1>Post component</h1>
        {posts[0] && posts.map((post) => (
          <li key={post.id}>
            <h1 key={post.id}>{post.title}</h1>
            <Link to={`/post/${post.id}`}>Lien...</Link>
            <Content id={post.id}></Content>
          </li>
        ))}
      </ul>
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
)(PostsList)