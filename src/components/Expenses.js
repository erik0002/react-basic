import React, {useState} from "react";
import './Expenses.css';
import Card from './Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {

    const [changedYear, setChangedYear] = useState('2022');

    const filterYearHandler = selectedYear => {
        setChangedYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={changedYear} onSelectYear = {filterYearHandler} />
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            </Card>
        </div>
    )
}

export default Expenses;
