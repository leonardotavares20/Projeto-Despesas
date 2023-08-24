import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => setTitle(event.target.value);

  const amountChangeHandler = (event) => setAmount(event.target.value);

  const dateChangeHandler = (event) => setDate(event.target.value);

  const createNewExpense = (event) => {
    event.preventDefault();

    let newExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitFormHandler = (event) => {
    props.submitExpense(event.target);
  };

  return (
    <>
      <form onSubmit={createNewExpense}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input value={title} onChange={titleChangeHandler} type="text" />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={amount}
              onChange={amountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={date}
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2024-12-01"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={submitFormHandler}>Cancel</button>
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
