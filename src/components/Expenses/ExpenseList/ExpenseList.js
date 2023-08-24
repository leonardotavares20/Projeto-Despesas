import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  let filteredElements = props.list;
  let expesesContent = (
    <p className="expense-list__fallback">No expenses found</p>
  );

  if (filteredElements.length === 0) {
    return expesesContent;
  }
  return (
    <>
      <ul className="expenses-list">
        <li>
          {filteredElements.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))}
        </li>
      </ul>
    </>
  );
}

export default ExpenseList;
