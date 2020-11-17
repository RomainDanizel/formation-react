import { useState, useCallback, memo } from 'react';

import Article from '../Article/Article';

function List(props) {
  const { articles, deleteArticle } = props;
  const [checked, setChecked] = useState(false);
  // const [selectedArticles, setSelectedArticles] = useState({});
  const [selectedArticles, setSelectedArticles] = useState(new Map());

  const updateSelected = useCallback((id) => {
    setSelectedArticles((selectedArticles) => {
      const clone = new Map([...selectedArticles]);
      clone.set(id, !clone.get(id));
      return clone;
    });
  }, []);

  function handleChange(event) {
    const checked = event.target.checked
    setChecked(checked);
    const array = articles.map((art) => [art.id, checked]);
    setSelectedArticles(new Map(array));
  }

  return (
    <div>
      {articles.map((art) => <Article
        article={art}
        key={art.id}
        // selected={Boolean(selectedArticles[art.id])}
        selected={Boolean(selectedArticles.get(art.id))}
        updateSelected={updateSelected}
        deleteArticle={deleteArticle}
      />)}
      <div>
        <input type="checkbox" checked={checked} onChange={handleChange}/>
      </div>
    </div>
  );
}

export default memo(List);
