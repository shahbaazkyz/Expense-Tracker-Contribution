import React, { useState } from 'react'

const Transaction = ({ take }) => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const send = (e) => {
        e.preventDefault();
        take(text , amount)
    }

    return (
      <>
        <div>
          <h3>Add new transaction</h3>
          <form id="form" >
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <input
                type="text"
                id="text"
                placeholder="Enter text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="amount">
                Amount <br />
                (negative - expense, positive - income)
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount..."
                value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                            console.log(amount);}}
              />
            </div>
            <button className="btn" onClick = { send}  >Add transaction</button>
          </form>
        </div>
      </>
    );
}

export default Transaction
