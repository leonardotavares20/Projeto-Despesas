import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (expenseData) => {
    console.log(expenseData)
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  const submitExpenseHandler = (button) => {
    props.submitButton(button)
  };

  return (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      submitExpense={submitExpenseHandler}
    />
  );
}

export default NewExpense;
