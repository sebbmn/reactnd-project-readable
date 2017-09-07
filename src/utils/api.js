const api = `http://localhost:5001/`

export const getAll = () => {
  return fetch(`${api}posts`, { headers: { 'Authorization': 'whatever-you-want' }})
  .then(res => res.json())
  //.then(data => data)
}
export const getPost = (id) => {
  return fetch(`${api}posts/${id}`, { headers: { 'Authorization': 'whatever-you-want' }})
  .then(res => res.json())
  //.then(data => data)
}
export const getComments = (postId) => {
  return fetch(`${api}posts/${postId}/comments`, { headers: { 'Authorization': 'whatever-you-want' }})
  .then(res => res.json())
  //.then(data => data)
}