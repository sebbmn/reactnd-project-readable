import { combineReducers } from 'redux'

import {
  ADD_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
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
      case UPDATE_CONTENT:
        return state
      case DELETE_CONTENT:
        return state
      default :
        return state
    }
  } else {
    return state
  }
}

function comments(state = [], action) {
  const { id, parentId, parentDeleted } = action

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
      case UPDATE_CONTENT:
        return state
      case DELETE_CONTENT:
        return state
      default :
        return state
    }
  } else {
    return state
  }
}

function contents(state = [], action) {
  const { id, timestamp, body, author, voteScore, deleted } = action

  switch (action.type) {
    case ADD_CONTENT:
      return [
        ...state,
        {
          id: id,
          timestamp: timestamp,
          body: body,
          author: author,
          voteScore: 1,
          deleted: false,
        }
      ]
    case UPDATE_CONTENT:
      return state
    case DELETE_CONTENT:
      return state
    default :
      return state
  }
}


export default combineReducers({
  posts,
  comments,
  contents,
})