import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';

function ExpenseItem (props){
  const {date, title, amount} = props;

  return(
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <ExpenseDescription title={title} amount={amount}/>
    </div>
  );
};

export default ExpenseItem;