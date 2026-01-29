// passing all props ie Service name,Price,Product etc,add to chart button,checkout button to give you a list of item in the chart you 



import { useContext } from "react";
import UserContext from "../UserContext.jsx";

function ProductCard({ item }) {
  const { total, setTotal } = useContext(UserContext);

  const handleConfirm = () => {
    setTotal(total + item.amount); // for products use price instead
    alert("Confirmed");
  };

  return (
    <div className="card">
      {item.image && <img src={item.image} alt={item.name} />}
      <h3>{item.name}</h3>
      {item.description && <p>{item.description}</p>}
      <p>Amount: {item.amount || item.price}</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default ProductCard;
