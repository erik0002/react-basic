import React, {useState} from "react";
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = (props) => {

    const [changedYear, setChangedYear] = useState('2022');

    const filterYearHandler = (selectedYear) => {
        console.log(selectedYear);
        setChangedYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expenseItem => {
        return expenseItem.date.getFullYear().toString() === changedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={changedYear} onSelectYear={filterYearHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;
