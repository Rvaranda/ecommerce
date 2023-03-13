import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import Banner from '../components/Banner';
import Product from '../components/Product';

function Home() {
  const { products, addProductToShoppingcart } = useContext(ProductContext);

  return (
    <main>
      <Banner />
      <section className="mostSelled">
        <h3>Nossos produtos mais vendidos</h3>
        <div className="products">
          {products.length && products.map(product => (
            <Product
              key={product.id}
              data={product}
              addProductToShoppingcart={addProductToShoppingcart}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;