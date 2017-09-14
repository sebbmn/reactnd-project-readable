import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContent } from '../actions'
import CreateEditContent from './CreateEditContent'
import DisplayContent from './DisplayContent'

class Content extends Component {
  state = {
    editMode: false
  }
  editMode = () => {
    this.setState({editMode: !this.state.editMode})
  }
  
  deleteThisContent = (content) => {
    this.props.deleteC(content)
  }
  render () {
    const { contentId, isPost, contentClass } = this.props
    const { editMode } = this.state

    return (
      <div className={contentClass}>
        <button onClick={this.editMode}>edit</button>
        {editMode ? (
          <CreateEditContent contentId={contentId} isPost={isPost}></CreateEditContent>          
        ) : (
          <div>
            <DisplayContent contentId={contentId} isPost={isPost}></DisplayContent>
            <button onClick={ () => this.deleteThisContent({ id:contentId})}>delete</button>
          </div>
        )}
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    deleteC: (data) => dispatch(deleteContent(data)) 
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Content)