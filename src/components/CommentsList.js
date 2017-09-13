import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import CreateEditContent from './CreateEditContent'

class CommentsList extends Component {
  state = {
    editMode: false
  }
  editMode = () => {
    this.setState({editMode: !this.state.editMode})
  }
  render () {
    const { postId, comments, contents } = this.props
    const { editMode } = this.state

    const activeComments = comments.filter(comment => contents.find(c => c.id === comment.id) && contents.find(c => c.id === comment.id).deleted !== true)
    const commentsList = activeComments.filter(comment => comment.parentId === postId)

    return (
      <div className='comments'>
        <h1>Comments</h1>
        {commentsList[0] && commentsList.map((comment) => (
          <div key={comment.id}>
            <button onClick={this.editMode}>edit</button>
            {editMode ? (
              <CreateEditContent contentId={comment.id} isPost={false}></CreateEditContent>          
            ) : (
              <Content contentId={comment.id} isPost={false}></Content>
            )}
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