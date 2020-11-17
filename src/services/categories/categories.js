export function getCategories() {
  return fetch('http://localhost:3001/categories')
    .then(response => response.json());
}

export function getCategory(id) {
  return fetch('http://localhost:3001/categories/' + id)
    .then(response => response.json());
}
