import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

import { updateContent } from '../actions'

class EditContent extends Component {

  state = {
    formContent: null
  }
  handleChangeBody = (event) => {
    this.setState({formContent:event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if(this.props.contentId) {
      this.props.updateC({ id: this.props.contentId, body: this.state.formContent })
    }
    this.props.editMode()
  }
  
  render () {
    const { contentId, contents, editMode } = this.props
    const { formContent } = this.state
    
    const content = contents.find(content => content.id === contentId)
    
    const body = (formContent !== null) ? formContent : content && content.body

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" value={body} onChange={this.handleChangeBody}/>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
        <Button onClick={editMode}>
          Cancel
        </Button>
      </form>
    )
  }
}

function mapStateToProps ({ contents }) {
  return {
    contents
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    updateC: (data) => dispatch(updateContent(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContent)