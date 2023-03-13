function TableRow({ name, price, amount }) {
  return (
    <tr>
      <td>
        <img
          src='https://via.placeholder.com/150x150'
          alt='produto'
        />
      </td>
      <td>{name}</td>
      <td>
        <button type='button' className='minusBtn'>-</button>
        {amount}
        <button type='button' className='plusBtn'>+</button>
      </td>
      <td>{`R$ ${price}`}</td>
    </tr>
  );
}

export default TableRow;