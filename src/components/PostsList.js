import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostsList extends Component {
  render () {
    const { category, posts, contents } = this.props

    const activePosts = posts.filter(post => contents.find(c => c.id === post.id) && contents.find(c => c.id === post.id).deleted !== true)
    const postsList = category ? activePosts.filter(post => post.category === category) : activePosts

    return (
      <ul className='posts' key='hafhjfa'>
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

function mapStateToProps ({ posts, contents }) {
  return {
    posts,
    contents,
  }
}

export default connect(
  mapStateToProps
)(PostsList)