import Card from "../../UI/Card/Card";
import "./Expense.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpensesChart/ExpensesChart";
import { useState } from "react";

function Expense(props) {
  let expense = props.items;

  const [yearSelected, setYearSelected] = useState("2019");

  const getExpensesYear = (year) => {
    setYearSelected(year);
  };

  const filteredElements = expense.filter((item) => {
    return item.date.getFullYear() === parseInt(yearSelected);
  });
  
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={getExpensesYear} />
        <ExpenseChart expenses={filteredElements} />
        <ExpenseList list={filteredElements} />
      </Card>
    </>
  );
}

export default Expense;
