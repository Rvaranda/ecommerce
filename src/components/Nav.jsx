import { Link } from 'react-router-dom';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';

function Nav() {
    return (
        <nav style={{ display: 'flex', alignItems: 'center' }}>
            {/* <ul>
                <li><Link to='/'>Início</Link></li>
                <li><Link to='/products'>Produtos</Link></li>
                <li><Link to='/'>Sobre</Link></li>
                <li><Link to='/'>Contato</Link></li>
            </ul> */}
            <Link to='/shoppingcart' className='shoppingCartBtn'>
                <FaShoppingCart />
                Carrinho
            </Link>
            <Link to='/login' className='loginBtn'>
                <FaRegUserCircle />
                <span>Login</span>
            </Link>
        </nav>
    );
}

export default Nav;