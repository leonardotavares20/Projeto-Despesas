import Expense from "./components/Expenses/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense/NewExpense";
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import "./index.css";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [contentForm, setContenteForm] = useState(false);

  const addExpenseHandler = (expense) => {
    setContenteForm(false);
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };

  let addExpense = (
    <Button onClick={() => setContenteForm(true)}>Add Expense</Button>
  );

  const handleButton = () => {
    setContenteForm(false);
  };

  if (contentForm) {
    addExpense = (
      <NewExpense
        onAddExpense={addExpenseHandler}
        submitButton={handleButton}
      />
    );
  }
  return (
    <div>
      <Card className="card">{addExpense}</Card>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
