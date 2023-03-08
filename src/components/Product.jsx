import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className='product'>
      <img src='https://via.placeholder.com/300x300' alt='Produto 1' />
      <h4>Produto 1</h4>
      <p>R$ 99,99</p>
      <Link to='/product' className='btn'>Comprar</Link>
    </div>
  );
}

export default Product;