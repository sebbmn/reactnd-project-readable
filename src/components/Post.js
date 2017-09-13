import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import Content from './Content'
import CreateEditContent from './CreateEditContent'
import { addContent, updateContent, deleteContent } from '../actions'

class Post extends Component {
  state = {
    editMode: false
  }
  editMode = () => {
    this.setState({editMode: !this.state.editMode})
  }
  render () {
    const {match, posts} = this.props
    const { editMode } = this.state
    const post = posts.find(p => p.id === match.params.postId)

    return (
      <div className='post'>
        <h1>{post && post.title}</h1>
        <button onClick={this.editMode}>edit</button>
        {editMode ? (
          <CreateEditContent contentId={match.params.postId} isPost={true}></CreateEditContent>          
        ) : (
          <Content contentId={match.params.postId} isPost={true}></Content>
        )}
        <CommentsList postId={match.params.postId}></CommentsList>
      </div>
    )
  }
}
function mapStateToProps ({ posts }) {
  return {
    posts
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
)(Post)