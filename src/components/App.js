import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { getAll } from '../utils/api'
import Post from './Post'
import Comment from './Comment'

class App extends Component {
  state = {
    posts : []
  }
  componentDidMount() {
    getAll().then((posts) => {
      if(!posts.error) {
        this.setState({posts})
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
        {this.state.posts[0] && this.state.posts.map((post) => (
          <div key={post.id}>
            <h1 key={post.id}>{post.title}</h1>
            <div key={post.id+post.id}>{post.body}</div>
          </div>
        ))}
        <Post></Post>
        <Comment></Comment>
      </div>
    );
  }
}

export default App;
