import React, { Component } from 'react'

import EditContent from './EditContent'
import DisplayContent from './DisplayContent'

class Content extends Component {

  state = {
    editMode: false
  }
  editMode = () => {
    this.setState({editMode: !this.state.editMode})
  }
  
  render () {
    const { contentId } = this.props
    const { editMode } = this.state

    return (
      <div>
        {editMode ? (
          <EditContent contentId={contentId} editMode={this.editMode}></EditContent>          
        ) : (
          <DisplayContent contentId={contentId} editMode={this.editMode}></DisplayContent>
        )}
      </div>
    )
  }
}
export default Content
