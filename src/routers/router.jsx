import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductPage from '../pages/ProductPage';
import ShoppingCart from '../pages/ShoppingCart';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <ProductPage />
      },
      {
        path: 'shoppingcart',
        element: <ShoppingCart />
      }
    ]
  }
]);