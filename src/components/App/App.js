import { lazy, Suspense, useState, useReducer } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import categoriesContext from '../../contexts/categories';
import cartContext from '../../contexts/cart';
import setCartContext from '../../contexts/setCart';

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

function reducer(state, action) {
  switch(action.type) {
    case 'updateQuantity':
      return state.map(
        item => item.id === action.id
          ? { ...item, quantity: action.quantity }
          : item
      );

    default:
      return state;
  }
}

function App() {
  const [cart, dispatch] = useReducer(reducer, [
    {
      id: 1,
      price: 12,
      name: 'foo',
      quantity: 1
    },
    {
      id: 2,
      price: 42,
      name: 'bar',
      quantity: 1
    }
  ]);

  const categories = useCategories();
  return (
    <categoriesContext.Provider value={categories}>
      <cartContext.Provider value={cart}>
        <setCartContext.Provider value={dispatch}>
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
        </setCartContext.Provider>
      </cartContext.Provider>
    </categoriesContext.Provider>
  );
}

export default App;
