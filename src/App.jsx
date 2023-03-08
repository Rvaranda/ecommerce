import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Produto 1',
      price: 59.99,
      description: 'Descrição do produto 1'
    },
    {
      id: 2,
      name: 'Produto 2',
      price: 99.99,
      description: 'Descrição do produto 2'
    },
    {
      id: 3,
      name: 'Produto 3',
      price: 129.99,
      description: 'Descrição do produto 3'
    },
    {
      id: 4,
      name: 'Produto 4',
      price: 300.0,
      description: 'Descrição do produto 4'
    },
    {
      id: 5,
      name: 'Produto 5',
      price: 29.99,
      description: 'Descrição do produto 5'
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Outlet context={products} />
      <Footer />
    </div>
  );
}

export default App;
