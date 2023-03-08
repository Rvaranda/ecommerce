import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className='banner'>
      <h2>Bem-vindo à Minha Loja Online</h2>
      <p>Encontre tudo o que precisa em um só lugar</p>
      <Link to='/products' className='btn'>Compre agora</Link>
    </section>
  );
}

export default Banner;