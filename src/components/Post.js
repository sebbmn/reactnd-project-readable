import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import Content from './Content'

class Post extends Component {
  
  render () {
    const {match, posts} = this.props
    const post = posts.find(p => p.id === match.params.postId)
    console.log(post)
    return (
      <div>
        <h1>{post && post.title}</h1>
        <Content contentId={match.params.postId}></Content>
        <CommentsList postId={match.params.postId}></CommentsList>
      </div>
    )
  }
}
function mapStateToProps ({ posts }) {
  return {
    posts
  }
}
export default connect(
  mapStateToProps
)(Post)