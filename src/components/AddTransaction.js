import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import generateID from '../Functions/generateID';


function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);
  const textFeildRef = React.useRef(null);
  const numbFeildRef = React.useRef(null);

  const onSubmit = event => {
    event.preventDefault();

    setAmount('')
    setText('')

    textFeildRef.current.focus()

    const newTransaction = {
      id: generateID(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input 
            type='text'
            value={text}
            ref={textFeildRef}
            onChange={event => {setText(event.target.value)}}
            onKeyDown={event => {if (event.key === 'Enter') numbFeildRef.current.focus()}}
            placeholder='Enter text&hellip;'
            autoFocus
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input 
            type='number' 
            value={amount}
            ref={numbFeildRef}
            onChange={event => setAmount(event.target.value)}
            onKeyDown={event => {if (event.key === 'Enter') onSubmit(event)}}
            placeholder='Enter amount&hellip;' 
          />
        </div>
      </form>
      <button className='btn' onClick={onSubmit}>Add Transaction</button>
    </div>
  )
}

export default AddTransaction
