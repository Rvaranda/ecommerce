import { Link } from 'react-router-dom';

function ProductPage() {
  return (
    <main>
      <section class="productHeader">
        <img src="https://via.placeholder.com/500x500" alt="produto" />
        <div class="productTitle">
          <h2>Produto 1</h2>
          <p>R$ 99,99</p>
          <p>Em estoque</p>
          <Link to='/' className="btn">Comprar</Link>
        </div>
      </section>
      <section class="productDescription">
        <h3>Descrição</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat optio nam tempora porro laborum veniam minima illum nobis, cumque eos deleniti voluptas aspernatur excepturi nesciunt provident error animi. Eos?</p>
      </section>
    </main>
  );
}

export default ProductPage;