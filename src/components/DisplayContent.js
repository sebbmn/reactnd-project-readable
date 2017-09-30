import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonToolbar, Glyphicon, Panel } from 'react-bootstrap'

import { updateVoteScore, deleteContent } from '../actions'

class DisplayContent extends Component {

  render () {
    const { contentId, contents, editMode, updateVote, deleteC } = this.props

    const content = contents.find(content => content.id === contentId)

    return (
      <Panel style={{backgroundColor: '#EEEEEE'}}
        header={
          `Posted by ${content && content.author}  ${content && new Date(content.timestamp).toUTCString()}`
        }
        footer={
          <div>
            <ButtonToolbar >
              {content.voteScore}
              <Button bsStyle="default" bsSize="xs" onClick={editMode}>
                <Glyphicon glyph="edit" style={{color: 'black'}}/>
              </Button>
              <Button bsStyle="default" bsSize="xs" onClick={ () => deleteC({ id:contentId})}>
                <Glyphicon glyph="remove" style={{color: 'red'}}/>
              </Button>
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
        <div className='content-body'>{content && content.body}</div>
      </Panel>
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
    updateVote: (data) => dispatch(updateVoteScore(data)),
    deleteC: (data) => dispatch(deleteContent(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayContent)