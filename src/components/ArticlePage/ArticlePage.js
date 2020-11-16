import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import categoriesContext from '../../contexts/categories';

import {
  createArticle,
  getArticle,
  updateArticle
} from '../../services/articles/articles';

import Title from '../Title/Title';

function ArticlePage(props) {
  const id = props.match.params.id;
  // const { match: { params: { id } } } = props;

  const categories = useContext(categoriesContext);
  const [article, setArticle] = useState({
    category: '',
    title: ''
  });
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getArticle(id).then(data => setArticle(data));
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    if (id) {
      updateArticle(article)
        .then(() => history.push('/'));
    } else {
      createArticle(article)
        .then(() => history.push('/'));
    }
  }

  function handleChange(event) {
    setArticle({
      ...article,
      [event.target.name]: event.target.value
    });
    ////////////////////////
    // const cloneArticle = {...article};
    // cloneArticle[event.target.name] = event.target.value;
    // setArticle(cloneArticle);
  }

  return (
    <>
      <Title title={id ? `Edit article (${id})` : 'Add new article'} />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Titre:
            <input
              name="title"
              type="text"
              value={article.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
              name="category"
              value={article.category}
              onChange={handleChange}
            >
              <option value=""></option>
              {categories.map(category => <option
                value={category.id}
                key={category.id}
              >{category.title}</option>)}
            </select>
          </label>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </>
  );
}

export default ArticlePage;
