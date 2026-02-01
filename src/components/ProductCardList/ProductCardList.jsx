import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { products } from "../Store/Store.jsx";
import { services } from "../Service/Service.jsx";
function ProductCardList({ type }) {
  const [items, setItems] = useState([]);

  // Load the right items based on type
  useEffect(() => {
    if (type === "products") {
      setItems(products);
    } else if (type === "services") {
      setItems(services);
    }
  }, [type]);

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
}

export default ProductCardList;
