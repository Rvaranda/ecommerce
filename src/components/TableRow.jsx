function TableRow({ name, price, amount }) {
  return (
    <tr>
      <td>
        <div className='itemDescription'>
          <img
            src='https://via.placeholder.com/120x120'
            alt='produto'
          />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <div className='amountController'>
          <button type='button' className='plusBtn'>+</button>
          <span>{amount}</span>
          <button type='button' className='minusBtn'>-</button>
        </div>
      </td>
      <td>{`R$ ${price}`}</td>
    </tr>
  );
}

export default TableRow;