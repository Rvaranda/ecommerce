import Banner from '../components/Banner';
import Product from '../components/Product';

function Home() {
  return (
    <main>
        <Banner />
        <section className="mostSelled">
            <h3>Nossos produtos mais vendidos</h3>
            <div className="products">
                <Product />
                <Product />
                <Product />
            </div>
        </section>
    </main>
  );
}

export default Home;