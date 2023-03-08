import Product from '../components/Product';

function Products() {
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
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </main>
  );
}

export default Products;