import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'

class CommentsList extends Component {
  render () {
    const { postId, comments, contents } = this.props

    const activeComments = comments.filter(comment => contents.find(c => c.id === comment.id) && contents.find(c => c.id === comment.id).deleted !== true)
    const commentsList = activeComments.filter(comment => comment.parentId === postId)

    return (
      <div className='comments'>
        <h1>Comments</h1>
        {commentsList[0] && commentsList.map((comment) => (
          <div key={comment.id}>
              <Content contentId={comment.id} isPost={false}></Content>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ comments, contents }) {
  return {
    comments,
    contents
  }
}

export default connect(
  mapStateToProps
)(CommentsList)