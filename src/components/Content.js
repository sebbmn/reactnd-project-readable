import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContent } from '../actions'
import CreateEditContent from './CreateEditContent'
import DisplayContent from './DisplayContent'
import { Button, ButtonToolbar } from 'react-bootstrap'

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
        {editMode ? (
          <CreateEditContent contentId={contentId} isPost={isPost} editMode={this.editMode}></CreateEditContent>          
        ) : (
          <div>
            <DisplayContent contentId={contentId} isPost={isPost}></DisplayContent>
          </div>
        )}
        <ButtonToolbar>
          <Button bsStyle="default" bsSize="xs" onClick={this.editMode}>
            edit
          </Button>
          <Button bsStyle="default" bsSize="xs" onClick={ () => this.deleteThisContent({ id:contentId})}>
            delete
          </Button>
        </ButtonToolbar>
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