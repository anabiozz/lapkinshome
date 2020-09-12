import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import products from './products';
import variations from './variations';
import product from './product';
import categories from './categories';
import cart from './cart';
import user from './user';

export default history => combineReducers({
  products,
  variations,
  product,
  categories,
  user,
  cart,
  router: connectRouter(history),
});