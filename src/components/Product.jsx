import { Link } from 'react-router-dom';

function Product({ data }) {
  return (
    <div className='product'>
      <Link to={`/products/${data.id}`}>
        <img src='https://via.placeholder.com/300x300' alt='Produto 1' />
      </Link>
      <h4>{data.name}</h4>
      <p>{`R$ ${data.price}`}</p>
      <Link to={`/products/${data.id}`} className='btn'>Comprar</Link>
    </div>
  );
}

export default Product;