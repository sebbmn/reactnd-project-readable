import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContent } from '../actions'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { Redirect } from 'react-router'

class AddContent extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: '',
    fireRedirect: false
  }
  handleSubmit = (event) => {
    event.preventDefault()
    //console.log(this.state.title)
    this.props.addC({ id: 'dsfsdffd'+this.state.title, parentId: this.props.parentId, timestamp: Date.now(), title: this.state.title, body: this.state.body, author: this.state.author, category: this.state.category })
    this.setState({fireRedirect: true})
  }
  handleChangeTitle = (event) => {
    this.setState({title:event.target.value})
  }
  handleChangeBody = (event) => {
    this.setState({body:event.target.value})
  }
  handleChangeAuthor = (event) => {
    this.setState({author:event.target.value})
  }
  handleChangeCategory = (event) => {
    this.setState({category:event.target.value})
  }

  render () {
    const { parentId, categories } = this.props
    const { title, body, author, category, fireRedirect } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        {!parentId &&
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            titre
          </ControlLabel>
          <FormControl type="text" value={title} onChange={this.handleChangeTitle}/>
        </FormGroup>
        }

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            author
          </ControlLabel>
          <FormControl type="text" value={author} onChange={this.handleChangeAuthor}/>
        </FormGroup>

        {!parentId &&
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl componentClass="select" placeholder="select" value={category} onChange={this.handleChangeCategory}>
            {categories && categories.map( c => (
              <option value={c.name}>{c.name}</option>
            ))}
          </FormControl>
        </FormGroup>
        }

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>
            Body
          </ControlLabel>
          <FormControl componentClass="textarea" value={body} onChange={this.handleChangeBody}/>
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>
        <Button>
          Cancel
        </Button>
        {fireRedirect && (
          <Redirect to={'/'}/>
        )}
      </form>
    )
  }
}
function mapStateToProps ({ categories }) {
  return {
    categories
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