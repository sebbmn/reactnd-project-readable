import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContent, addContent } from '../actions'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class AddContent extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addC({ id: 'dsfsdffd', parentId: '', timestamp: Date.now(), title: 'nouveau contenu', body: 'ceci est un contenu de test', author: 'seb', category: 'udacity' })
  }
  render () {
    const {contents, posts, comments } = this.props

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            test
          </ControlLabel>
          <FormControl componentClass="textarea" value="ceci est un test" />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
        <Button>
          Cancel
        </Button>
      </form>
    )
  }
}
function mapStateToProps ({ contents, posts, comments }) {
  return {
    contents,
    posts,
    comments
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    addC: (data) => dispatch(addContent(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContent)