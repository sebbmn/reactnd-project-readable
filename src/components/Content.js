import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteContent } from '../actions'
import EditContent from './EditContent'
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
          <EditContent contentId={contentId} isPost={isPost} editMode={this.editMode}></EditContent>          
        ) : (
          <div>
            <ButtonToolbar>
              <Button bsStyle="default" bsSize="xs" onClick={this.editMode}>
                edit
              </Button>
              <Button bsStyle="default" bsSize="xs" onClick={ () => this.deleteThisContent({ id:contentId})}>
                delete
              </Button>
            </ButtonToolbar>
            <DisplayContent contentId={contentId} isPost={isPost}></DisplayContent>
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