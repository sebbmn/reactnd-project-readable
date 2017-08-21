import { combineReducers } from 'redux'

import {
  ADD_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
} from '../actions'

const initialPostState = {
  id: null,
  timestamp: 0,
  title: null,
  body: null,
  author: null,
  category: null,
  voteScore: 1,
  deleted: false,
}
const initialCommentState = {
  id: null,
  parentId: null,
  timestamp: 0,
  body: null,
  author: null,
  voteScore: 1,
  deleted: false,
  parentDeleted: false,
}
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

function comments(state = [], action) {
  const { id, parentId, timestamp, body, author, voteScore } = action

  switch (action.type) {
    case ADD_CONTENT:
      return state
    case UPDATE_CONTENT:
      return state
    case DELETE_CONTENT:
      return state
    default :
      return state
  }
}

export default combineReducers({
  post,
  comment,
})