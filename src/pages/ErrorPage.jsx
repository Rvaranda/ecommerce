import { useRouteError } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <div className='errorMsg'>
      <Header />

      <div>
        <h1>Ops! Algo deu errado.</h1>
        <p>Página não encontrada.</p>
      </div>

      <Footer />
    </div>
  );
}

export default ErrorPage;