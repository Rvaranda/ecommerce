import { useOutletContext } from 'react-router-dom';
import Product from '../components/Product';

function Products() {
  const data = useOutletContext();

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
        {data.length && data.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </section>
    </main>
  );
}

export default Products;