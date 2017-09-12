import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContent } from '../actions'

class Content extends Component {
  
  render () {
    const { contentId, isPost, contentClass, contents, deleteC } = this.props
    const content = contents.find(content => content.id === contentId)

    return (
      <div className={contentClass}>
        <div className='content-id'>ID: {content && content.id}</div>
        <div className='content-timestamp'>Timestamp: {content && content.timestamp}</div>
        <div className='content-body'>Body: {content && content.body}</div>
        <div className='content-author'>Author: {content && content.author}</div>
        <div className='content-votescore'>Votescore: {content && content.voteScore}</div>
        <div className='content-deleted'>Deleted: {content && content.deleted}</div>
        <button onClick={ () => deleteC({ id:contentId})}>delete</button>
        <br/>
        <Link to={`/edit/${contentId}`}>Edit</Link>
      </div>
    )
  }
}
function mapStateToProps ({ contents }) {
  return {
    contents
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    deleteC: (data) => dispatch(deleteContent(data)) 
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)