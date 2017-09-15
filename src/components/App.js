
import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter  } from 'react-router-dom'
import { getAll, getPost, getComments, getCategories } from '../utils/api'
import Post from './Post'
import Home from './Home'
import Category from './Category'
import Header from './Header'
import CreateEditContent from './CreateEditContent'


import { addContent, updateContent, deleteContent, addCategory } from '../actions'

class App extends Component {
  componentDidMount() {
    getAll().then((posts) => {
      if(!posts.error) {
        posts.map(p => (
          getPost(p.id).then((post) => {
            if(!post.error) {
                this.props.add({ id: post.id, timestamp:post.timestamp, title:post.title, body: post.body, author: post.author, category:post.category })
                getComments(p.id).then((comments) => {
                  if(!comments.error) {
                    comments.map(comment => (
                      this.props.add({ id: comment.id, parentId: comment.parentId, timestamp:comment.timestamp, title:comment.title, body: comment.body, author: comment.author })  
                    ))
                  } else {
                    console.log('fetch data error: comments')      
                  }
                })
            } else {
              console.log('fetch data error: post id: ...')
            }  
          })  
        ))    
      } else {
        console.log('fetch data error: posts')
      }     
    }
  )
  getCategories().then( (categories) => {
    if(!categories.error) {
      categories.categories.map(cat => (
        this.props.addCat({ name: cat.name, path: cat.path })
      ))
    } else {
      console.log('fetch data error: categories')
    }
  })
}
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:category' component={Category}/>
          <Route path='/:category/:post_id' component={Post}/>
          <Route path='/edit/:contentId' component={CreateEditContent}/>
          <Route path='/new' component={CreateEditContent}/>
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
    delete: (data) => dispatch(deleteContent(data)),
    addCat: (data) => dispatch(addCategory(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
