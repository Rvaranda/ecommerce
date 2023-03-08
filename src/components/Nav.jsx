import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Início</Link></li>
                <li><Link to='/products'>Produtos</Link></li>
                <li><Link to='/'>Sobre</Link></li>
                <li><Link to='/'>Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;