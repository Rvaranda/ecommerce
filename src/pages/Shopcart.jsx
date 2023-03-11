function Shopcart() {
  return (
    <main>
        <section className='shoppingList'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img 
                                src='https://via.placeholder.com/150x150' 
                                alt='produto' 
                            />
                        </td>
                        <td>Produto 1</td>
                        <td>2</td>
                        <td>R$ 229,98</td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                src='https://via.placeholder.com/150x150' 
                                alt='produto' 
                            />
                        </td>
                        <td>Produto 2</td>
                        <td>3</td>
                        <td>R$ 136,98</td>
                    </tr>
                </tbody>
            </table>
            <div className='shoppingSummary'>
                <table>
                    <tbody>
                        <tr>
                            <td>Total dos itens</td>
                            <td>R$ 366,96</td>
                        </tr>
                        <tr>
                            <td>Desconto</td>
                            <td>R$ 0,00</td>
                        </tr>
                        <tr>
                            <td>Frete</td>
                            <td>R$ 30,87</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>Total</td>
                            <td style={{fontWeight: 'bold'}}>R$ 397,83</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
  );
}

export default Shopcart;