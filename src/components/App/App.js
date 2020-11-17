import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import categoriesContext from '../../contexts/categories';

import useCategories from '../../hooks/useCategories/useCategories';

import Header from '../Header/Header';

// import ArticlesPage from '../ArticlesPage/ArticlesPage';
// import ArticlePage from '../ArticlePage/ArticlePage';
// import Cart from '../Cart/Cart';
// import TicTacToe from '../TicTacToe/TicTacToe';
// import Timer from '../Timer/Timer';

const ArticlesPage = lazy(() => import('../ArticlesPage/ArticlesPage'));
const ArticlePage = lazy(() => import('../ArticlePage/ArticlePage'));
const Cart = lazy(() => import('../Cart/Cart'));
const TicTacToe = lazy(() => import('../TicTacToe/TicTacToe'));
const Timer = lazy(() => import('../Timer/Timer'));

function App() {
  const categories = useCategories();
  return (
    <categoriesContext.Provider value={categories}>
      <BrowserRouter>
        <Header/>
        <Suspense fallback="loading...">
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
            <Route
              exact
              path="/timer"
              component={Timer}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </categoriesContext.Provider>
  );
}

export default App;
