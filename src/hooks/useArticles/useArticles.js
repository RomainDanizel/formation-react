import { useEffect, useState } from 'react';

import { getArticles } from '../../services/articles/articles';

function useArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles()
      .then(data => setArticles(data));
  }, [setArticles]);
  return articles;
}

export default useArticles;
