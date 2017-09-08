export const ADD_CONTENT = 'ADD_CONTENT'
export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const DELETE_CONTENT = 'DELETE_CONTENT'
export const ADD_CATEGORY = 'ADD_CATEGORY'

export function addContent ({ id, parentId, timestamp, title, body, author, category }) {
  return {
    type: ADD_CONTENT,
    id,
    parentId,
    timestamp,
    title,
    body,
    author,
    category,
  }
}

export function updateContent ({ id, timestamp, body, voteScore }) {
  return {
    type: UPDATE_CONTENT,
    id,
    timestamp,
    body,
    voteScore,
  }
}

export function deleteContent ({ id }) {
  return {
    type: DELETE_CONTENT,
    id,
  }
}

export function addCategory ({ name, path }) {
  return {
    type: ADD_CATEGORY,
    name,
    path
  }
}