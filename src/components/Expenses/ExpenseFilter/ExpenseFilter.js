import Card from "../../UI/Card/Card";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const changeYearHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <>
      <Card className="expenses-filter expenses-filter__control">
        <div>Filter By Year</div>
        <div>
          <select onChange={changeYearHandler} name="year">
            <option value={"2019"}>2019</option>
            <option value={"2020"}>2020</option>
            <option value={"2021"}>2021</option>
            <option value={"2022"}>2022</option>
            <option value={"2023"}>2023</option>
          </select>
        </div>
      </Card>
    </>
  );
}

export default ExpenseFilter;
