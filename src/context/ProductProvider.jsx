import { createContext, useState } from 'react';

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Produto 1',
      price: 59.99,
      description: 'Descrição do produto 1'
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 99.99,
      description: 'Descrição do produto 2'
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 129.99,
      description: 'Descrição do produto 3'
    },
    {
      id: 4,
      name: 'Produto 4',
      price: 300.0,
      description: 'Descrição do produto 4'
    },
    {
      id: 5,
      name: 'Produto 5',
      price: 29.99,
      description: 'Descrição do produto 5'
    },
  ]);

  const [shoppingCart, setShoppingCart] = useState([]);

  function addProductToShoppingcart(id) {
    const product = products.find(e => e.id === id);
    setShoppingCart([...shoppingCart, product]);
  }

  return (
    <ProductContext.Provider value={{
      products, shoppingCart, addProductToShoppingcart
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;