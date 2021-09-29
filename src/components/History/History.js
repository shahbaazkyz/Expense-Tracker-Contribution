import Item from "./HistoryItem";

const History = (p) => {
    const { data , dlt } = p;
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
       <Item data = {data} dlt = {dlt}  />
      </ul>
    </>
  );
}
 
export default History;