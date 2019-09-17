import Home from '../home/containers/Home'
import Products from '../products/containers/Products'
import Cart from '../cart/containers/Cart'
import ProductDescription from '../product_desc/containers/ProductDescription'
import Checkout from '../cart/containers/Checkout'

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Cart,
    path: '/cart'
	},
	{
    component: Checkout,
		path: '/checkout',
		exact: true
	},
	{
    component: Products,
		path: '/wallart',
		exact: true
	},
	{
    component: Products,
		path: '/new',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/wallart/:productID',
		exact: true
	},
	{
    component: Products,
		path: '/stationary',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/stationary/:productID',
		exact: true
	},
];


