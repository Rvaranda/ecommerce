import { useRouteError } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='errorMsg'>
      <Header />

      <div>
        <h1>Ops! Algo deu errado.</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default ErrorPage;