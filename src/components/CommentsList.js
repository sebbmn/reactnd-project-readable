import React, { Component } from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { addContent, updateContent, deleteContent } from '../actions'

class CommentsList extends Component {

  render () {
    const { comments, contents } = this.props

    return (
      <div className='comment'>
        <h1>Comments</h1>
        {comments[0] && comments.map((comment) => (
          <div key={comment.id}>
            <h1 key={comment.id}>{comment.title}</h1>
            <h2>Author: {comment.author}</h2>
            <div key={comment.id+comment.id}>{comment.body}</div>
          </div>
        ))}
        <Content></Content>
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