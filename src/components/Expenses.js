import './Expenses.css';
import Card from './Card';
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
        </Card>
    )
}

export default Expenses;
