import { useState } from 'react';

import './ExpenseItem.css';
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';

function ExpenseItem (props){
  const {date, title, amount} = props;

  const [changing, setChanging] = useState(title)

  const clickHandler = () =>{
    setChanging('New Title here!')
  };

  return(
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <ExpenseDescription title={changing} amount={amount}/>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;