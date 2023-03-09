import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Nav() {
    return (
        <nav style={{ display: 'flex', alignItems: 'center' }}>
            <ul>
                <li><Link to='/'>Início</Link></li>
                <li><Link to='/products'>Produtos</Link></li>
                <li><Link to='/'>Sobre</Link></li>
                <li><Link to='/'>Contato</Link></li>
            </ul>
            <Link to='/shopcart' className='shoppingCart'>
                <FaShoppingCart />
                Carrinho
            </Link>
        </nav>
    );
}

export default Nav;