export const ADD_CONTENT = 'ADD_CONTENT'
export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const DELETE_CONTENT = 'DELETE_CONTENT'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const PARENT_DELETED = 'PARENT_DELETED'

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

export function parentDeleted ({ parentId }) {
  return {
    type: PARENT_DELETED,
    parentId,
  }
}

export function addCategory ({ name, path }) {
  return {
    type: ADD_CATEGORY,
    name,
    path
  }
}