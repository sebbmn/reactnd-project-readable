import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateVoteScore } from '../actions'
import { Button, ButtonToolbar, Glyphicon, Panel } from 'react-bootstrap'

class DisplayContent extends Component {

  render () {
    // const { contentId, isPost, contents, comments, posts, updateVote } = this.props
    const { contentId, isPost, contents, updateVote } = this.props

    const content = contents.find(content => content.id === contentId)

    //let comment
    //let post

    if(!isPost){
    //  comment = comments.find(c => c.id === contentId)
    } else {
      //post = posts.find( p => p.id === contentId )
    }

    return (
      <Panel 
        header={
          `Posted by ${content && content.author}  ${content && new Date(content.timestamp).toUTCString()}`
        }
        footer={
          <div>
            <ButtonToolbar>
              {content.voteScore}
              <Button bsStyle="default" bsSize="xs" onClick={() => updateVote({id: content.id, vote:1})}>
                <Glyphicon glyph="thumbs-up" style={{color: 'green'}}/>
              </Button>
              <Button bsStyle="default" bsSize="xs" onClick={() => updateVote({id: content.id, vote:-1})}>
                <Glyphicon glyph="thumbs-down" style={{color: 'red'}}/>
              </Button>
            </ButtonToolbar>
          </div>  
        }
        >
        <div className='content-body'>{content && content.body}
        </div>
      </Panel>
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
    updateVote: (data) => dispatch(updateVoteScore(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayContent)