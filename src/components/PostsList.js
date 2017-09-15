import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

class PostsList extends Component {
  render () {
    const { category, posts, contents } = this.props

    const activePosts = posts.filter(post => contents.find(c => c.id === post.id) && contents.find(c => c.id === post.id).deleted !== true)
    const postsList = category ? activePosts.filter(post => post.category === category) : activePosts

    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Vote Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {postsList[0] && postsList.map((post, index) => (
            <tr  key={post.id}>
              <td>{index+1}</td>
              <td>
                <Link to={`/${post.category}/${post.id}`}>
                  {post.title}
                </Link>
              </td>
              <td>{post.category}</td>
              <td>{contents.find(content => post.id === content.id).voteScore}</td>
              <td>{new Date(contents.find(content => post.id === content.id).timestamp).toUTCString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
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