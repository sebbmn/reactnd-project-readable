import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContent, addContent } from '../actions'
import { Redirect } from 'react-router'

class CreateEditContent extends Component {
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
    if(this.props.contentId) {
      this.props.updateC({ id: this.props.contentId, body: this.state.textAreaValue, voteScore: 666 })
    } else {
      this.props.addC({ id: 'dsfsdffd', parentId: '', timestamp: new Date.now, title: 'nouveau contenu', body: 'ceci est un contenu de test', author: 'seb', category: 'udacity' })
    }
    
  }
  render () {
    const { contentId, contentClass, contents } = this.props
    const { fireRedirect, textAreaValue } = this.state
    const content = contents.find(content => content.id === contentId)
    
    const currentValue = textAreaValue ? textAreaValue : content && content.body

    return (
      <div className={contentClass}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: {contentId}
            <br/>
            <textarea value={currentValue} onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
        {fireRedirect && (contentId ?
        (
          <Redirect to={`/post/${contentId}`}/>
        ) : (
          <Redirect to={`/post/dsfsdffd`}/>
        ))}
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
    addC: (data) => dispatch(addContent(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditContent)