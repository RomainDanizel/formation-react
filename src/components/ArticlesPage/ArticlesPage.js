import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { deleteArticle } from '../../services/articles/articles';

import useArticles from '../../hooks/useArticles/useArticles';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Resize from '../Resize/Resize';
import Title from '../Title/Title';

function ArticlesPage() {
  const [articles, setArticles] = useArticles();
  const [count, setCount] = useState(0);

  const [filters, setFilters] = useState({
    title: '',
    category: '',
    published: ''
  });
  function handleFilterChange(event) {
    setFilters(filters => ({
      ...filters,
      [event.target.name]: event.target.value
    }));
  }

  const handleArticleDeleted = useCallback((id) => {
    deleteArticle(id)
      .then(() => {
        const data = articles.filter(article => article.id !== id);
        setArticles(data);
      });
  }, [articles, setArticles]);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(art => art.title.includes(filters.title))
      .filter(art => filters.category === '' ||
        art.category === Number(filters.category))
      .filter(art => filters.published === '' ||
        (art.published === true && filters.published === 'published') ||
        (art.published === false && filters.published === 'draft'));
  }, [articles, filters.category, filters.title, filters.published]);

  return (
    <>
      <Title title="Homepage" />
      <Link to="/article">Add new article</Link>
      <Resize/>
      <button type="button" onClick={() => setCount(count + 1)}>{count}</button>

      <Container>
        <Filters
          category={filters.category}
          published={filters.published}
          title={filters.title}
          handleFilterChange={handleFilterChange}
        />
        <List
          articles={filteredArticles}
          deleteArticle={handleArticleDeleted}
        />
      </Container>
    </>
  );
}

export default ArticlesPage;
