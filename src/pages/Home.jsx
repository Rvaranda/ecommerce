import { useOutletContext } from 'react-router-dom';
import Banner from '../components/Banner';
import Product from '../components/Product';

function Home() {
  const data = useOutletContext();

  return (
    <main>
        <Banner />
        <section className="mostSelled">
            <h3>Nossos produtos mais vendidos</h3>
            <div className="products">
            {data.length && data.map(product => (
              <Product key={product.id} data={product} />
            ))}
            </div>
        </section>
    </main>
  );
}

export default Home;