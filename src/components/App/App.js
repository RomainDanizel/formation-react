import { useState } from 'react';

import useArticles from '../../hooks/useArticles/useArticles';
import useCategories from '../../hooks/useCategories/useCategories';

import Filters from '../Filters/Filters';
import List from '../List/List';
import CartItem from '../CartItem/CartItem';
import Resize from '../Resize/Resize';
import Title from '../Title/Title';

function App() {
  const articles = useArticles();
  const categories = useCategories();

  const pdt1 = {
    price: 12,
    name: 'foo'
  };
  const pdt2 = {
    price: 42,
    name: 'bar'
  };

  const [title, setTitle] = useState('Homepage');
  function handleClick() {
    setTitle('Page de liste');
  }

  // const [titleFilter, setTitleFilter] = useState('');
  // function handleTitleChange(event) {
  //   setTitleFilter(event.target.value);
  // }

  // const [categoryFilter, setCategoryFilter] = useState('');
  // function handleCategoryChange(event) {
  //   setCategoryFilter(event.target.value);
  // }

  const [filters, setFilters] = useState({
    title: '',
    category: '',
    published: ''
  });
  function handleFilterChange(event) {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  }

  const filteredArticles = articles
    .filter(art => art.title.includes(filters.title))
    .filter(art => filters.category === '' ||
      art.category === Number(filters.category))
    .filter(art => filters.published === '' ||
      (art.published === true && filters.published === 'published') ||
      (art.published === false && filters.published === 'draft'));

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>change title</button>
      <Resize/>
      <Filters
        categories={categories}
        category={filters.category}
        published={filters.published}
        title={filters.title}
        handleFilterChange={handleFilterChange}
      />
      <List
        articles={filteredArticles}
        categories={categories}
      />
      <CartItem product={pdt1} />
      <CartItem product={pdt2} />
    </div>
  );
}

export default App;
