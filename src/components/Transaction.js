import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  
  return (
    <li className={transaction.amount < 0 ? 'neg' : 'pos'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
    </li>
  )
}

export default Transaction
