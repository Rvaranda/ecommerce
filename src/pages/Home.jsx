import Product from '../components/Product';

function Home() {
  return (
    <main>
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