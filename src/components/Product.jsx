import { Link } from 'react-router-dom';

function Product({ data }) {
  return (
    <div className='product'>
      <img src='https://via.placeholder.com/300x300' alt='Produto 1' />
      <h4>{data.name}</h4>
      <p>{`R$ ${data.price}`}</p>
      <Link to='/product' className='btn'>Comprar</Link>
    </div>
  );
}

export default Product;