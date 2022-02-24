import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {

 const [filteredYear, setFilteredYear] = useState('2020')
    
  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  
  return (
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses}  />
      </Card>
    )
}

export default Expenses;