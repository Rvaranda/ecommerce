import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <h1>Minha Loja Online</h1>
                </div>
            </Link>
            <Nav />
        </header>
    );
}

export default Header;