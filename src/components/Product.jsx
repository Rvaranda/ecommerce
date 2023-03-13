import { Link } from 'react-router-dom';

function Product({ data, addProductToShoppingcart }) {
  return (
    <div className='product'>
      <Link to={`/products/${data.id}`}>
        <img src='https://via.placeholder.com/300x300' alt='Produto 1' />
      </Link>
      <h4>{data.name}</h4>
      <p>{`R$ ${data.price}`}</p>
      <button
        type='button'
        className='btn'
        onClick={() => addProductToShoppingcart(data.id)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default Product;