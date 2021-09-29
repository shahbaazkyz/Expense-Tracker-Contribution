const Item = ({data , dlt}) => {
    
    return (
        <>
            {
                data.map(
                    (val , index) => {
                        return (
                          <li className={val.amount > 0 ? "plus" : "minus"} key = {index} >
                            {val.text} <span>Rs. {val.amount}</span>
                            <button
                              className="delete-btn"
                              onClick={() => dlt(index)}
                            >
                              x
                            </button>
                          </li>
                        );
                    }
                )
            }
            </>
     );
}
 
export default Item;