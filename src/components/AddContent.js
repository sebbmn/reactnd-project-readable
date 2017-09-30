import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import uuidv1 from 'uuid/v1'

import { addContent } from '../actions'

class AddContent extends Component {
  state = {
    title: 'title',
    body: 'Some text ...',
    author: 'author',
    category: 'react',
    fireRedirect: false
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addC({ id: uuidv1(), parentId: this.props.parentId, timestamp: Date.now(), title: this.state.title, body: this.state.body, author: this.state.author, category: this.state.category })
    if(this.props.parentId) {
      this.props.addMode()
    } else {
      this.setState({fireRedirect: true})
    }
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
  componentDidMount = () =>{
    if(this.props.match) {
      this.setState({category:this.props.match.params.origin})
    }
  }
  render () {
    const { parentId, categories, addMode } = this.props
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
              <option key={c.name} value={c.name}>{c.name}</option>
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
        {parentId ? (
          <Button onClick={() => addMode()}>
            Cancel
          </Button>
        ) : (
          <Button onClick={this.props.history.goBack}>
            Cancel
          </Button>
        )}


        {fireRedirect && (
          !parentId && <Redirect to={`/${category}`}/>
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