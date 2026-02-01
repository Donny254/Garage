// passing all props ie Service name,Price,Product etc,add to chart button,checkout button to give you a list of item in the chart you 


import { useContext } from "react";
import UserContext from "../../UserContext.jsx";

function ProductCard({ item }) {
  const { total, setTotal } = useContext(UserContext);

  // Determine the numeric value for this item
  const itemAmount = item.price ?? item.amount ?? 0;

  const handleConfirm = () => {
    setTotal(total + itemAmount);
    alert("Confirmed");
  };

  return (
    <div className="card">
      {item.image && <img src={item.image} alt={item.name} />}
      <h3>{item.name}</h3>
      {service.description && <p>{service.description}</p>}
      <p>Amount: {serviceAmount}</p>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
}

export default ProductCard;

