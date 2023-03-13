import { useContext } from 'react';

import TableRow from '../components/TableRow';
import ShoppingSummary from '../components/ShoppingSummary';
import { ProductContext } from '../context/ProductProvider';

function Shopcart() {
  const { shoppingCart } = useContext(ProductContext);

  return (
    <main style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <section className='shoppingList'>
        <table>
          <tbody>
            {shoppingCart.map(product => (
              <TableRow
                key={product.id}
                name={product.name}
                price={product.price}
                amount={1}
              />
            ))}
            {/* <TableRow name='Produto 2' price={136.98} amount={3} /> */}
          </tbody>
        </table>
      </section>
      <aside className='shoppingSummary'>
        <ShoppingSummary />
      </aside>
    </main>
  );
}

export default Shopcart;