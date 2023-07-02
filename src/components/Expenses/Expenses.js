import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
//import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./Expensefilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
