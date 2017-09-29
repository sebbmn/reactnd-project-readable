import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'
import { updateVoteScore } from '../actions'

class PostsList extends Component {
  render () {
    const { category, posts, comments, contents, updateVote } = this.props

    const activePosts = posts.filter(post => contents.find(c => c.id === post.id) && contents.find(c => c.id === post.id).deleted !== true)
    const postsList = category ? activePosts.filter(post => post.category === category) : activePosts

    return (
      <div>
        <Link to="/new">
          <Glyphicon glyph="plus-sign" style={{color: '#aaaaaa', fontSize: '14pt'}}/>
        </Link>
        <Table striped bordered condensed>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Comments</th>
              <th>Vote</th>
              <th>Score</th>
              <th>Date</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {postsList[0] && postsList.map((post, index) => (
              <tr  key={post.id}>
                <td>{index+1}</td>
                <td>
                  <Link to={`/${post.category}/${post.id}`}>
                    {post.title}
                  </Link>
                </td>
                <td>{contents.find(c => c.id === post.id) && contents.find(c => c.id === post.id).author}</td>
                <td>
                  {comments.reduce( (sum, value) => {

                    if((value.parentId === post.id) && !contents.find(c => c.id === value.id).deleted) {
                      sum = sum +1
                    }
                    return sum
                  },0)}
                </td>
                <td>
                  <ButtonToolbar>
                    <Button bsStyle="default" bsSize="xs" onClick={() => updateVote({id: post.id, vote:1})}>
                      <Glyphicon glyph="thumbs-up" style={{color: 'green'}}/>
                    </Button>
                    <Button bsStyle="default" bsSize="xs" onClick={() => updateVote({id: post.id, vote:-1})}>
                      <Glyphicon glyph="thumbs-down" style={{color: 'red'}}/>
                    </Button>
                  </ButtonToolbar>   
                </td>
                <td>{contents.find(content => post.id === content.id).voteScore}</td>
                <td>{new Date(contents.find(content => post.id === content.id).timestamp).toUTCString()}</td>
                <td>edit link</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return { 
    updateVote: (data) => dispatch(updateVoteScore(data))
  }
}
function mapStateToProps ({ posts, contents, comments }) {
  return {
    posts,
    contents,
    comments,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList)