import React, {useState} from "react";
import './Expenses.css';
import Card from './Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

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
                {filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;
