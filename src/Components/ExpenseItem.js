import './ExpenseItem.css'




function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>August 29.21</div>
      <div className="expense-item__description">
        <h2 className>Car Insurance</h2>
        <div className="expense-item__price">$444</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
