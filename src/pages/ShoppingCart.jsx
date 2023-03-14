import { useContext } from 'react';

import TableRow from '../components/TableRow';
import ShoppingSummary from '../components/ShoppingSummary';
import { ProductContext } from '../context/ProductProvider';

function ShoppingCart() {
  const { shoppingCart } = useContext(ProductContext);

  return (
    <main>
      <section className='shoppingCart'>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.length === 0 && (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center' }}>Seu carrinho está vazio</td>
              </tr>
            )}
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
        <ShoppingSummary />
      </section>
    </main>
  );
}

export default ShoppingCart;