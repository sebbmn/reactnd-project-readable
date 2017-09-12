export const ADD_CONTENT = 'ADD_CONTENT'
export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const DELETE_CONTENT = 'DELETE_CONTENT'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const UPDATE_BUFFER = 'UPDATE_BUFFER'

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

export function updateContent ({ id, body, voteScore }) {
  return {
    type: UPDATE_CONTENT,
    id,
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
    path,
  }
}

export function updateBuffer ({content}) {
  return {
    type: UPDATE_BUFFER,
    content,
  }
}