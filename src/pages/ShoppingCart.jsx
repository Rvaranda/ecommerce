import { useContext } from 'react';

import TableRow from '../components/TableRow';
import ShoppingSummary from '../components/ShoppingSummary';
import { ProductContext } from '../context/ProductProvider';

function ShoppingCart() {
  const { shoppingCart } = useContext(ProductContext);

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='shoppingCart'>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map(product => (
              <TableRow
                key={product.id}
                name={product.name}
                amount={1}
                price={product.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ShoppingCart;