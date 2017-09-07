import React, { Component } from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { addContent, updateContent, deleteContent } from '../actions'

class CommentsList extends Component {

  render () {
    const { postId, comments } = this.props
    comments.filter(comment => comment.parentId === postId)

    return (
      <div className='comment'>
        <h1>Comments</h1>
        {comments.filter(comment => comment.parentId === postId)[0] && comments.filter(comment => comment.parentId === postId).map((comment) => (
          <div key={comment.id}>
            <Content contentId={comment.id}></Content>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ comments, contents }) {
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