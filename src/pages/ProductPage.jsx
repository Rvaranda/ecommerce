import { Link, useOutletContext, useParams } from 'react-router-dom';

function ProductPage() {
  const products = useOutletContext();
  const { id } = useParams();
  const product = products.find(e => e.id.toString() === id);

  return (
    <main>
      <section className="productHeader">
        <img src="https://via.placeholder.com/500x500" alt="produto" />
        <div className="productTitle">
          <h2>{product.name}</h2>
          <p>{`R$ ${product.price}`}</p>
          <p>Em estoque</p>
          <Link to='/' className="btn">Comprar</Link>
        </div>
      </section>
      <section className="productDescription">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </section>
    </main>
  );
}

export default ProductPage;