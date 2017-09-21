import { combineReducers } from 'redux'

import {
  ADD_CONTENT,
  UPDATE_BODY,
  UPDATE_VOTESCORE,
  DELETE_CONTENT,
  ADD_CATEGORY,
  UPDATE_BUFFER,
} from '../actions'


// http://redux.js.org/docs/basics/ExampleTodoList.html comme example
function posts(state = [], action) {
  const { id, title, category} = action

  // Check if its a post
  if(category) {
    switch (action.type) {
      case ADD_CONTENT:
        return [
          ...state,
          {
            id: id,
            title: title,
            category: category,
          }
        ]
      default :
        return state
    }
  } else {
    return state
  }
}

function comments(state = [], action) {
  // const { id, parentId, parentDeleted } = action
  const { id, parentId } = action

  // check if its a comment
  if(parentId) {
    switch (action.type) {
      case ADD_CONTENT:
        return [
          ...state,
          {
            id: id,
            parentId: parentId,
            parentDeleted: false,
          }
        ]
      default :
        return state
    }
  } else {
    switch (action.type) {
      case DELETE_CONTENT:
        return state.map( comment =>
          (comment.parentId === action.id)
            ? {...comment, 
              parentDeleted: true}
            : comment
        )
      default :
        return state
    }
  }
}

function contents(state = [], action) {
  const { id, timestamp, body, author } = action

  switch (action.type) {
    case ADD_CONTENT:
      return [
        ...state,
        {
          id: id,
          timestamp: timestamp,
          body: body,
          author: author,
          voteScore: 0,
          deleted: false,
        }
      ]
    case UPDATE_BODY:
      return state.map( content =>
        (content.id === action.id)
          ? {...content, 
            body: body}
          : content
      )
    case UPDATE_VOTESCORE:
      return state.map( content =>
        (content.id === action.id)
          ? {...content, 
            voteScore: content.voteScore+action.vote}
          : content
      )
    case DELETE_CONTENT:
      return state.map( content =>
        (content.id === action.id)
          ? {...content, 
            deleted: true}
          : content
      )
    default :
      return state
  }
}

function categories(state = [], action) {
  const { name, path } = action
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          name: name,
          path: path,
        }
      ]
    default:
      return state
  }
}

function buffer(state = {}, action) {
  switch (action.type) {
    case UPDATE_BUFFER:
      return {content: action.content}
    default:
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  contents,
  categories,
  buffer,
})