import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { getAll } from '../utils/api'
import Post from './Post'
import Comment from './Comment'
import { addContent, updateContent, deleteContent } from '../actions'

class App extends Component {
  state = {}
  componentDidMount() {
    getAll().then((posts) => {
      if(!posts.error) {
        posts.map(post => (
          this.props.add({ id: post.id, parentId:post.parentId, Timestamp:Date.now(), title:post.title, body: post.body, author: post.author, category:post.category })
        ))    
      }     
    })  
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Here the api test for now...
        </p>
        <Post></Post>
        <Comment></Comment>
      </div>
    );
  }
}
function mapStateToProps ({ posts, comments }) {
  return {
    posts,
    comments
  }
}

function mapDispatchToProps (dispatch) {
  return { 
    add: (data) => dispatch(addContent(data)),
    update: (data) => dispatch(updateContent(data)),
    delete: (data) => dispatch(deleteContent(data)) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
