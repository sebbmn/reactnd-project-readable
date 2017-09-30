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

    if(this.props.match) {
      this.props.updateC({ id: this.props.match.params.contentId, body: this.state.formContent })
      this.props.history.goBack()
    } else if(this.props.contentId) {
      this.props.updateC({ id: this.props.contentId, body: this.state.formContent })
      this.props.editMode()
    }
  }
  
  render () {
    const { contentId, contents, editMode, match } = this.props
    const { formContent } = this.state
    
    let content
    if(match) {
      content = contents.find(content => content.id === match.params.contentId)
    } else {
      content = contents.find(content => content.id === contentId)
    }
    
    const body = (formContent !== null) ? formContent : content && content.body

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" value={body} onChange={this.handleChangeBody}/>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
        {!match ? (
          <Button onClick={editMode}>
            Cancel
          </Button>
        ) : (
          <Button onClick={this.props.history.goBack}>
            Cancel
          </Button>
        )}
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