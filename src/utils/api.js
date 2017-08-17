const api = `http://localhost:5001/`

export const getAll = () => {
  return fetch(`${api}posts`, { headers: { 'Authorization': 'whatever-you-want' }})
  .then(res => res.json())
  //.then(data => data)
}
