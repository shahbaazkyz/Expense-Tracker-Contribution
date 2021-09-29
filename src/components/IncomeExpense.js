const Income = ({income , expense}) => {
    return (
      <>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              Rs. {income}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
             Rs. {expense}
            </p>
          </div>
        </div>
      </>
    );
}
 
export default Income;