import { Link } from "react-router-dom";

function Login() {
  return (
    <main>
      <div className='loginForm'>
        <form>
          <input
            type='text'
            id='username'
            placeholder='Usuário'
            autoComplete='disabled'
            required
          />
          <input
            type='password'
            id='password'
            placeholder='Senha'
            required
          />
          <button type='submit'>Login</button>
        </form>
        <p>
          Ainda não possui conta? <Link to='/signup'>Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;