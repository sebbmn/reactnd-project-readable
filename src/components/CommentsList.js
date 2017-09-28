import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'

class CommentsList extends Component {
  render () {
    const { postId, comments, contents } = this.props

    const activeComments = comments.filter(comment => contents.find(c => c.id === comment.id) && contents.find(c => c.id === comment.id).deleted !== true)
    const commentsList = activeComments.filter(comment => comment.parentId === postId)

    const numberOfComments = comments.reduce( (sum, value) => {
                                if((value.parentId === postId) && !contents.find(c => c.id === value.id).deleted) {
                                  sum = sum +1
                                }
                                return sum
                              },0)

    return (
      <div className='comments'>
        <h4>{numberOfComments} Comments</h4>
        {commentsList[0] && commentsList.map((comment) => (
          <div key={comment.id}>
              <Content contentId={comment.id} isPost={false}></Content>
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