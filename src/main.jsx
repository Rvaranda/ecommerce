import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
import ProductProvider from './context/ProductProvider';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <RouterProvider router={router} />
  </ProductProvider>
);
