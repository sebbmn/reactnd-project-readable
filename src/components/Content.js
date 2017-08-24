import React, { Component } from 'react'
import { connect } from 'react-redux'

class Content extends Component {
  
  render () {
    const {id,contents} = this.props
    const content = contents.find(content => content.id === id)
    //console.log(content)
    return (
      <div className='content'>
        <div className='content-id'>ID: {content && content.id}</div>
        <div className='content-timestamp'>Timestamp: {content && content.timestamp}</div>
        <div className='content-body'>Body: {content && content.body}</div>
        <div className='content-author'>Author: {content && content.author}</div>
        <div className='content-votescore'>Votescore: {content && content.voteScore}</div>
        <div className='content-deleted'>Deleted: {content && content.deleted}</div>
      </div>
    )
  }
}
function mapStateToProps ({ contents }) {
  return {
    contents
  }
}
export default connect(
  mapStateToProps
)(Content)