export function getArticles() {
  return fetch('http://localhost:3001/articles')
    .then(response => response.json());
}

export function getArticle(id) {
  return fetch(`http://localhost:3001/articles/${id}`)
    .then(response => response.json());
}

export function createArticle(article) {
  return fetch(
    'http://localhost:3001/articles',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...article,
        category: Number(article.category)
      })
    })
    .then(response => response.json());
}

export function updateArticle(article) {
  return fetch(
    `http://localhost:3001/articles/${article.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...article,
        category: Number(article.category)
      })
    })
    .then(response => response.json());
}

export function deleteArticle(id) {
  return fetch(
    `http://localhost:3001/articles/${id}`,
    { method: 'DELETE' }
  );
}