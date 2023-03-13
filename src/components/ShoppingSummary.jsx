function ShoppingSummary() {
  return (
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
          <td style={{ fontWeight: 'bold' }}>Total</td>
          <td style={{ fontWeight: 'bold' }}>R$ 397,83</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ShoppingSummary;