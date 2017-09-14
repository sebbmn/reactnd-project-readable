import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateContent, addContent } from '../actions'

class CreateEditContent extends Component {
  state = {
    formContent: {}
  }
  handleChangeBody = (event) => {
    this.setState({formContent: {body: event.target.value}})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editMode()

    if(this.props.contentId) {
      this.props.updateC({ id: this.props.contentId, body: this.state.formContent.body, voteScore: 666 })
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
    
    const body = (formContent.body !== null) ? formContent.body : content && content.body
    const voteScore = (formContent.voteScore !== null) ? formContent.voteScore : content && content.voteScore

    return (
      <div className={contentClass}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: {post && post.title}
            <br/>
            <textarea value={body} onChange={this.handleChangeBody}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
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
)(CreateEditContent)