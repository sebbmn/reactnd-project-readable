import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContent } from '../actions'
import { Redirect } from 'react-router'

class Content extends Component {
  state = {
    fireRedirect: false,
  }
  
  deleteThisContent = (content) => {
    this.props.deleteC(content)
    this.setState({ fireRedirect: true })
  }
  render () {
    const { contentId, isPost, contentClass, contents, comments } = this.props
    const { fireRedirect } = this.state
    const content = contents.find(content => content.id === contentId)
    let parentId = ''

    if(!isPost){
      parentId = comments.find(c => c.id === contentId) && comments.find(c => c.id === contentId).parentId
    }
    return (
      <div className={contentClass}>
        <div className='content-id'>ID: {content && content.id}</div>
        <div className='content-timestamp'>Timestamp: {content && content.timestamp}</div>
        <div className='content-body'>Body: {content && content.body}</div>
        <div className='content-author'>Author: {content && content.author}</div>
        <div className='content-votescore'>Votescore: {content && content.voteScore}</div>
        <div className='content-deleted'>Deleted: {content && content.deleted}</div>
        <button onClick={ () => this.deleteThisContent({ id:contentId})}>delete</button>
        <br/>
        {fireRedirect && (isPost && (
          <Redirect to={`/`}/>
        ))}
      </div>
    )
  }
}
function mapStateToProps ({ contents, comments }) {
  return {
    contents,
    comments
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