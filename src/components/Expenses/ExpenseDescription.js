function ExpenseDescription (props){
  const {title, amount} = props;

  return(
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
};

export default ExpenseDescription;