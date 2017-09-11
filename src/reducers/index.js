import { combineReducers } from 'redux'

import {
  ADD_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT,
  ADD_CATEGORY,
  PARENT_DELETED,
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
      case PARENT_DELETED:
        return state.map( comment =>
          (comment.parentId === action.parentId)
            ? {...comment, 
              parentId: true}
            : comment
        )
      default :
        return state
    }
  } else {
    return state
  }
}

function contents(state = [], action) {
  const { id, timestamp, body, author, voteScore } = action

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
      return state.map( content =>
        (content.id === action.id)
          ? {...content, 
            body: body,
            voteScore: voteScore}
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