import "./ExpenseItem.css";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  // console.log(props)
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </>
  );
}

export default ExpenseItem;
