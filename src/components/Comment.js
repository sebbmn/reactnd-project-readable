import React, { Component } from 'react'
import Content from './Content'
import { connect } from 'react-redux'
import { addContent, updateContent, deleteContent } from '../actions'

class Comment extends Component {

  render () {
    const { comments } = this.props

    return (
      <div className='comment'>
        <h1>Comment component</h1>
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
)(Comment)