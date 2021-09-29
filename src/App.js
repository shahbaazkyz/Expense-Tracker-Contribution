import { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History/History';
import Income from './components/IncomeExpense';
import Transaction from './components/Transaction';

function App() {

   const dummyTransactions = [
     { text: "Flower", amount: "+20000" },
     { text: "Salary", amount: "-20000" },
     { text: "Book", amount: "+20000" },
     { text: "Camera", amount: "+20000" },
   ];
  
  const [expenses, setExpenses] = useState(dummyTransactions);

  let income = [0];
  let expense = [0];

  expenses.map(
    (val, index) => {
      let value = Number(val.amount);
      // let check = value.slice(0, 1);
      if (value > 0) {
        income.push(value)
      }
      else {
        expense.push(value)
      }
      // if (check === "+") {
      //   income.push(value)
      // }
      // else if (check === "-") {
       
      //   expense.push(value)
      // }
      // else {
      //   let moreData = value.slice(1);
      //   income.push(moreData)
      // }
      return 0
    }
  )

  const convertIncome = income.map(val => Number(val))
  const calcIncome = convertIncome.reduce(
    (a,b) => a + b
  )
  const convertExpense = expense.map(val => Number(val))
  const calcExpense = convertExpense.reduce(
    (a,b) => a + b
  )

   let totBalance = calcIncome + calcExpense;

  const takeIt = (text , amount) => {
    console.log(text, amount);
    // const newExpense = [...expenses, {text : text , amount : +amount } ]
    // setExpenses(newExpense)

    setExpenses((prevExp) => {
      return [...prevExp, { text: text, amount: amount }];
    });
  }
  const deleteIt = (a) => {
    const newExpense = expenses.filter(
      (val, index) => {
        return index !== a
      }
    )
    setExpenses(newExpense)
   };
 

  return (
    <>
      <Header />
      <Balance balance = {totBalance} />
      <Income income = {calcIncome} expense = {calcExpense} />
      <History data = {expenses} dlt = {deleteIt}   />
      <Transaction take = {takeIt}    />
      </>
  );
}

export default App;
