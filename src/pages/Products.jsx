import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import Product from '../components/Product';

function Products() {
  const { products, addProductToShoppingcart } = useContext(ProductContext);

  return (
    <main>
      <div className='searchProduct'>
        <form>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Busque aqui'
          /><button type='submit'>Buscar</button>
        </form>
      </div>
      <section className='productsGrid'>
        {products.length && products.map(product => (
          <Product
            key={product.id}
            data={product}
            addProductToShoppingcart={addProductToShoppingcart}
          />
        ))}
      </section>
    </main>
  );
}

export default Products;