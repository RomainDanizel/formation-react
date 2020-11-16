import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import categoriesContext from '../../contexts/categories';

import './Article.css';

function Article(props) {
  const { article, updateSelected, selected, deleteArticle } = props;
  const categories = useContext(categoriesContext);

  const { category: categoryId, published, title, id } = article;
  // const categoryId = article.category;
  // const published = article.published;
  // const title = article.title;

  const category = categories.find(
    cat => cat.id === categoryId
  );

  // const [ selected, setSelected ] = useState(false);
  function handleClick() {
    updateSelected(id);
  }

  function handleDelete(event) {
    event.stopPropagation();
    deleteArticle(id);
  }

  return (
    <div
      className={classnames('Article', { 'Article--selected': selected })}
      onClick={handleClick}
    >
      <div className="Article__title">{title}</div>
      <div>{category ? category.title : categoryId}</div>
      <div>{published ? 'Published' : 'Draft'}</div>
      <div><Link to={`/article/${id}`}>edit</Link></div>
      <div><button onClick={handleDelete}>delete</button></div>
    </div>
  );
}

Article.defaultProps = {
  article: {}
};

export default Article;
