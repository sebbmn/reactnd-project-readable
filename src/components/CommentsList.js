import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import { addContent, updateContent, deleteContent } from '../actions'

class CommentsList extends Component {

  render () {
    const { postId, comments } = this.props
    const commentsList = comments.filter(comment => comment.parentId === postId)

    return (
      <div className='comments'>
        <h1>Comments</h1>
        {commentsList[0] && commentsList.map((comment) => (
          <div key={comment.id}>
            <Content contentId={comment.id}></Content>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ comments }) {
  return {
    comments
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
)(CommentsList)