import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContent, addContent } from '../actions'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class EditContent extends Component {
  state = {
    formContent: null
  }
  handleChangeBody = (event) => {
    this.setState({formContent:event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editMode()

    if(this.props.contentId) {
      this.props.updateC({ id: this.props.contentId, body: this.state.formContent })
    } else {
      //this.props.addC({ id: 'dsfsdffd', parentId: '', timestamp: new Date.now, title: 'nouveau contenu', body: 'ceci est un contenu de test', author: 'seb', category: 'udacity' })
    }
    
  }
  render () {
    const { contentId, contentClass, isPost, contents, posts, comments } = this.props
    const { formContent } = this.state
    
    const content = contents.find(content => content.id === contentId)

    let comment
    let post

    if(!isPost){
      comment = comments.find(c => c.id === contentId)
    } else {
      post = posts.find( p => p.id === contentId )
    }
    
    const body = (formContent !== null) ? formContent : content && content.body

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            {`Posted by ${content && content.author}  ${content && new Date(content.timestamp).toUTCString()}`}
          </ControlLabel>
          <FormControl componentClass="textarea" value={body} onChange={this.handleChangeBody}/>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
        <Button onClick={this.props.editMode}>
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
    updateC: (data) => dispatch(updateContent(data)),
    addC: (data) => dispatch(addContent(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContent)