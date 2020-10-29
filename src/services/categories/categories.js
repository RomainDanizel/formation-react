export function getCategories() {
  return fetch('http://localhost:3000/categories')
    .then(response => response.json());
}

export function getCategory(id) {
  return fetch('http://localhost:3000/categories/' + id)
    .then(response => response.json());
}
