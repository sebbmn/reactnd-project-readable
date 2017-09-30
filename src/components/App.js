import React, { Component } from 'react'
import { Switch, Route, withRouter  } from 'react-router-dom'
import { connect } from 'react-redux'

import { getAll, getPost, getComments, getCategories } from '../utils/api'
import Post from './Post'
import Home from './Home'
import Category from './Category'
import Header from './Header'
import EditContent from './EditContent'
import AddContent from './AddContent'

import { addContent, addCategory } from '../actions'

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
                console.log('fetch data error: post')
              }  
            })  
          ))    
        } else {
          console.log('fetch data error: posts')
        }     
      })
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
      <div className='container'>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/new' component={AddContent}/>
          <Route exact path='/new/:origin' component={AddContent}/>
          <Route exact path='/edit' component={EditContent}/>
          <Route exact path='/edit/:contentId' component={EditContent}/>
          <Route exact path='/:category' component={Category}/>
          <Route exact path='/:category/:post_id' component={Post}/>
        </Switch>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return { 
    add: (data) => dispatch(addContent(data)),
    addCat: (data) => dispatch(addCategory(data))
  }
}
export default withRouter(connect(
  null,
  mapDispatchToProps
)(App))
