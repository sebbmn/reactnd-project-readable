import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'

import { updateVoteScore, deleteContent, sortByDate, sortByVotes } from '../actions'

class PostsList extends Component {
  
  render () {
    const { category, posts, comments, contents, updateVote, deletePost, sort, sortByDate, sortByVotes } = this.props

    let postsList = posts.map( (post) => {
      return { ...post, ...contents.find(c => c.id === post.id) }
    })

    postsList = postsList.filter(post =>  post.deleted !== true)
    postsList = postsList.filter(post =>  post.title)

    if(category) {
      postsList = postsList.filter(post => post.category === category)
    }

    if(sort.order === 'VOTE') {
      postsList.sort((a,b) => -1*(a.voteScore-b.voteScore))
    } else if(sort.order === 'DATE') {
      postsList.sort((a,b) => -1*(a.timestamp-b.timestamp))
    }

    let origin = category ? category : 'udacity'

    return (
      <div>
        <Link to={`/new/${origin}`}>
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
              <th>
                Score
                <Button bsStyle="default" bsSize="xs" onClick={() => sortByVotes()}>
                    <Glyphicon glyph="sort" style={{alignContent: 'right'}}/>
                </Button>
              </th>
              <th>
                Date
                <Button bsStyle="default" bsSize="xs" onClick={() => sortByDate()}>
                    <Glyphicon glyph="sort" style={{alignContent: 'right'}}/>
                </Button>
              </th>
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
                <td>{post.author}</td>
                <td>
                  {comments.reduce( (sum, value) => {
                    if((value.parentId === post.id) && !contents.find( c=> c.id === value.id).deleted) {
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
                <td>{post.voteScore}</td>
                <td>{new Date(post.timestamp).toUTCString()}</td>
                <td>
                  <ButtonToolbar>
                    <Button bsStyle="default" bsSize="xs" onClick={() => deletePost({id: post.id})}>
                      <Glyphicon glyph="remove" style={{color: 'red'}}/>
                    </Button>
                    <Button bsStyle="default" bsSize="xs">
                      <Link to={`/edit/${post.id}`}>
                        <Glyphicon glyph="edit" style={{color: 'black'}}/>
                      </Link>
                    </Button> 
                  </ButtonToolbar>   
                </td>
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
    updateVote: (data) => dispatch(updateVoteScore(data)),
    deletePost: (data) => dispatch(deleteContent(data)),
    sortByDate: () => dispatch(sortByDate()),
    sortByVotes: () => dispatch(sortByVotes())
  }
}
function mapStateToProps ({ posts, contents, comments, sort }) {
  return {
    posts,
    contents,
    comments,
    sort,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList)