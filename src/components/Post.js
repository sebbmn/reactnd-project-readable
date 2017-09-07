import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'

class Post extends Component {
  
  render () {
    const {match, contents} = this.props
    const content = contents.find(content => content.id === match.params.postId)
    //console.log(content)
    return (
      <div className='content'>
        <div className='content-id'>ID: {content && content.id}</div>
        <div className='content-timestamp'>Timestamp: {content && content.timestamp}</div>
        <div className='content-body'>Body: {content && content.body}</div>
        <div className='content-author'>Author: {content && content.author}</div>
        <div className='content-votescore'>Votescore: {content && content.voteScore}</div>
        <div className='content-deleted'>Deleted: {content && content.deleted}</div>
        <CommentsList postId={match.params.postId}></CommentsList>
      </div>
    )
  }
}
function mapStateToProps ({ contents, posts }) {
  return {
    contents, posts
  }
}
export default connect(
  mapStateToProps
)(Post)