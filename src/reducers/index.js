import { combineReducers } from 'redux'

import {
  ADD_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
} from '../actions'


// http://redux.js.org/docs/basics/ExampleTodoList.html comme example
function posts(state = [], action) {
  const { id, timestamp, title, body, author, category, voteScore} = action

  switch (action.type) {
    case ADD_CONTENT:
      return [
        ...state,
        {
          id: id,
          timestamp: timestamp,
          title: title,
          body: body,
          author: author,
          category: category,
          voteScore: voteScore,
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

function comments(state = [], action) {
  const { id, parentId, timestamp, body, author, voteScore } = action

  switch (action.type) {
    case ADD_CONTENT:
      return [
        ...state,
        {
          id: id,
          parentId: parentId,
          timestamp: timestamp,
          body: body,
          author: author,
          voteScore: voteScore,
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
})