import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';

function ExpenseItem (props){
  const {date, title, amount} = props;

  return(
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <ExpenseDescription title={title} amount={amount}/>
    </Card>
  );
};

export default ExpenseItem;