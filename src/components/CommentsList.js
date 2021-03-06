import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon } from 'react-bootstrap'

import Content from './Content'
import AddContent from './AddContent'

class CommentsList extends Component {

  state = {
    addMode: false
  }
  addMode = () => {
    this.setState({addMode: !this.state.addMode})
  }
  
  render () {
    const { postId, comments, contents } = this.props
    const { addMode } = this.state

    let commentsList = comments.map( (comment) => {
      return { ...comment, ...contents.find(c => c.id === comment.id) }
    })

    commentsList = commentsList.filter(comment =>  comment.deleted !== true)
    commentsList = commentsList.filter(comment => comment.parentId === postId)

    const numberOfComments = commentsList.reduce( (sum, value) => {
                                if((value.parentId === postId) && !value.deleted) {
                                  sum = sum +1
                                }
                                return sum
                              },0)

    return (
      <div className='comments'>
        <h4>{numberOfComments} Comments</h4>
        <Button bsStyle="default" bsSize="xs" onClick={this.addMode}>
          <Glyphicon glyph="plus-sign" style={{color: '#aaaaaa', fontSize: '14pt'}}/>
        </Button>
      {addMode ? (
        <AddContent parentId={postId} addMode={this.addMode}></AddContent>
      ) : (
        <div>
          {commentsList[0] && commentsList.map((comment) => (
            <div key={comment.id}>
                <Content contentId={comment.id} isPost={false}></Content>
            </div>
          ))}
        </div>
      )}
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