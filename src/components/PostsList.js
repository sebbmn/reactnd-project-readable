import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addContent, updateContent, deleteContent } from '../actions'

class PostsList extends Component {
  render () {
    const { category,posts } = this.props
    const postsList = category ? posts.filter(post => post.category === category) : posts

    return (
      <ul className='posts' key='hafhjfa'>
        <h1>Post component</h1>
        {postsList[0] && postsList.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h1 key={post.id}>{post.title}</h1>
            </Link>
            <div>Category: {post.category}</div>
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