import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import Content from './Content'

class Post extends Component {
  render () {
    const {match, contents, posts} = this.props

    const content = contents.find(content => content.id === match.params.post_id)
    const post = posts.find(p => p.id === match.params.post_id)

    return (
      <div className='post'>
        {post && (!content.deleted ? (
          <div>
            <h3>{post && post.title}</h3>
            <Content contentId={match.params.post_id} isPost={true}></Content>
            <CommentsList postId={match.params.post_id}></CommentsList>
          </div>
        ) : (
          <div>This post has been deleted</div>
        ))}
      </div>
    )
  }
}
function mapStateToProps ({ contents, posts }) {
  return {
    contents,
    posts
  }
}

export default connect(
  mapStateToProps
)(Post)