import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";

function ProductCardList({ type, customItems }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // Use the customItems prop passed from parent component
    if (customItems) {
      setItems(customItems);
    }
  }, [type, customItems]);
  
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
}

export default ProductCardList;