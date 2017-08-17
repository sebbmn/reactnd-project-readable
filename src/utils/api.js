export function fetchCategories (category = '') {
  category = category.trim()
  return('on y est')
  //return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    //.then((res) => res.json())
    //.then(({ hits }) => hits.map(({ recipe }) => recipe))
}