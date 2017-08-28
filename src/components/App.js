
import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link, withRouter  } from 'react-router-dom'
import { getAll, getPost } from '../utils/api'
import Post from './Post'
import Home from './Home'
import Category from './Category'
import Header from './Header'


import { addContent, updateContent, deleteContent } from '../actions'

class App extends Component {
  componentDidMount() {
    getAll().then((posts) => {
      if(!posts.error) {
        posts.map(p => (
          getPost(p.id).then((post) => {
            if(!post.error) {
                this.props.add({ id: post.id, parentId:post.parentId, timestamp:post.timestamp, title:post.title, body: post.body, author: post.author, category:post.category })
            } else {
              console.log('fetch data error')
            }  
          })  
        ))    
      } else {
        console.log('fetch data error')
      }     
    })  
}
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/category' component={Category}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route exact path='/post' component={Post}/>
          <Route path='/post/:postId' component={Post}/>
        </Switch>
      </div>
    );
  }
}
function mapStateToProps () {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return { 
    add: (data) => dispatch(addContent(data)),
    update: (data) => dispatch(updateContent(data)),
    delete: (data) => dispatch(deleteContent(data)) 
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
