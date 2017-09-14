import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContent } from '../actions'

class DisplayContent extends Component {

  render () {
    const { contentId, isPost, contentClass, contents, comments, posts, updateC } = this.props

    const content = contents.find(content => content.id === contentId)

    let comment
    let post

    if(!isPost){
      comment = comments.find(c => c.id === contentId)
    } else {
      post = posts.find( p => p.id === contentId )
    }

    return (
      <div className={contentClass}>
        <div className='content-id'>ID: {content && content.id}</div>
        {!isPost && (
          <div className='comment-parent-id'>Parent ID: {comment && comment.parentId}</div>
        )}
        <div className='content-timestamp'>Timestamp: {content && new Date(content.timestamp).toUTCString()}</div>
        <div className='content-body'>Body: {content && content.body}</div>
        <div className='content-author'>Author: {content && content.author}</div>
        {isPost && (
          <div className='post-category'>Category: {post && post.category}</div>
        )}
        <div className='content-votescore'>Votescore: {content && content.voteScore}</div>
        <button onClick={() => updateC({id: content.id, body: content.body, voteScore: content.voteScore+1})}>+</button>
        <button onClick={() => updateC({id: content.id, body: content.body, voteScore: content.voteScore-1})}>-</button>
        <div className='content-deleted'>Deleted: {content && content.deleted.toString()}</div>
        {!isPost && (
        <div className='comment-parent-deleteted'>Parent Deleted: {comment && comment.parentDeleted.toString()}</div>
        )}
      </div>
    )
  }
}
function mapStateToProps ({ contents, posts, comments }) {
  return {
    contents,
    posts,
    comments
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    updateC: (data) => dispatch(updateContent(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayContent)