import { useEffect, useState } from 'react';

import List from '../List/List';
import CartItem from '../CartItem/CartItem';
import Resize from '../Resize/Resize';
import Title from '../Title/Title';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, [setArticles]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, [setCategories]);

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

  return (
    <div>
      <Title title={title} />
      <button onClick={handleClick}>change title</button>
      <Resize/>
      <List articles={articles} categories={categories} />
      <CartItem product={pdt1} />
      <CartItem product={pdt2} />
    </div>
  );
}

export default App;
