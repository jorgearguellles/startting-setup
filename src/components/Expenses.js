import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;

  return(
    expenses.map(item => {
      return (
        <Card className="expenses">
          <div>
            <ExpenseItem
              key={item.id} 
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          </div>
        </Card>
      )
    })
  );
};

export default Expenses;