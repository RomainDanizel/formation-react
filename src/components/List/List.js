import Article from '../Article/Article';

function List(props) {
  const { articles, categories } = props;

  return (
    <div>
      {articles.map((art) => <Article
        article={art}
        categories={categories}
        key={art.id}
      />)}
    </div>
  );
}

export default List;
