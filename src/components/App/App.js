import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import categoriesContext from '../../contexts/categories';

import useCategories from '../../hooks/useCategories/useCategories';

import ArticlesPage from '../ArticlesPage/ArticlesPage';
import ArticlePage from '../ArticlePage/ArticlePage';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import TicTacToe from '../TicTacToe/TicTacToe';

function App() {
  const categories = useCategories();
  return (
    <categoriesContext.Provider value={categories}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route
            exact
            path="/"
            component={ArticlesPage}
          />
          <Route
            exact
            path="/article"
            component={ArticlePage}
          />
          <Route
            exact
            path="/article/:id"
            component={ArticlePage}
          />
          <Route
            exact
            path="/cart"
            component={Cart}
          />
          <Route
            exact
            path="/tictactoe"
            component={TicTacToe}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </categoriesContext.Provider>
  );
}

export default App;
