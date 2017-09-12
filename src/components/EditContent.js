import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContent } from '../actions'
import { Redirect } from 'react-router'

class EditContent extends Component {
  state = {
    textAreaValue: '',
    fireRedirect: false,
  }
  handleChange = (event) => {
    this.setState({textAreaValue: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ fireRedirect: true })
    this.props.updateC({ id: this.props.match.params.contentId, body: this.state.textAreaValue, voteScore: 666 })
  }
  render () {
    const { match, contentClass, contents } = this.props
    const { fireRedirect, textAreaValue } = this.state
    const content = contents.find(content => content.id === match.params.contentId)
    
    const currentValue = textAreaValue ? textAreaValue : content && content.body

    return (
      <div className={contentClass}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: {match.params.contentId}
            <br/>
            <textarea value={currentValue} onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        {fireRedirect && (
          <Redirect to={`/post/${match.params.contentId}`}/>
        )}
      </div>
    )
  }
}
function mapStateToProps ({ contents }) {
  return {
    contents,
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    updateC: (data) => dispatch(updateContent(data)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContent)