import { useState } from "react";
import ProductCardList from "../ProductCardList/ProductCardList.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import './Store.css';
function Store() {
  const [products] = useState([
    {
      name: "Dashboard Camera",
      image: "https://imgs.search.brave.com/gzcUgA-1LG30a8CLLVzcBLaT-LMcAUxOzQOteGZ3VdU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1Jh/cFVNYkVNZG9iUlRH/WjJvTjVZdFUuanBn",
      description: "Dash Cam 1296P Front Dashcam, V300 WiFi Dash Camera for Cars with App, Night Vision, Mini Hidden Single Car Camera, Loop Recording, 24H Parking Mode, Support 256GB Max, Black",
      amount: 2500
    },
    {
      name: "Seat Cover",
      image: "https://m.media-amazon.com/images/I/81QES5gmuZL._AC_SX466_.jpg",
      description: "Pariitadin Leather Car Seat Covers Front Pair, Waterproof Breathable Faux Leather Automotive Seat Covers for Cars, Non-Slip Car Interior Covers Universal Fit Most Cars Sedans Trucks SUVs, Black",
      amount: 5500
    },
    {
      name: "Car Air Freshener",
      image: "https://m.media-amazon.com/images/I/71hT8U1AYgL._AC_SX466_.jpg",
      description: "LITTLE TREES Car Air Freshener | Fiber Can Provides Long Lasting Scent for Auto or Home | Recycled Fiber | Black Ice, 4 Air Fresheners",
      amount: 1500
    },
    {
      name: "USB Car Charger",
      image: "https://m.media-amazon.com/images/I/715dVAhI7qL._AC_SX466_.jpg",
      description: "USB C Car Charger, 3-Port 67W Dual USB-C & USB-A Car Power Adapter PD/QC Fast Charging Cigarette Lighter for iPhone 17/16/15/14/13/12/11 Pro Max, iPad, Samsung Galaxy S25 S24/S23/S22, Pixel, Android",
      amount: 7500
    },
    {
      name: "Car Trunk Organizer",
      image: "https://m.media-amazon.com/images/I/61rYgqmb6PL._AC_SX466_.jpg",
      description: "Car Trunk Organizer and Storage, Backseat Hanging Organizer for SUV, Truck, MPV, Waterproof, Collapsible Cargo Storage Bag with 4 Pockets, Car Interior Accessories (Black)",
      amount: 4500
    }
  ]);

  // ADD THESE LINES ✅
  const [search, setSearch] = useState("");
  
  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store">
      <div className="store-header">
        <h1>Auto Parts Store</h1>
        <p>Quality parts for your vehicle</p>
      </div>
      {/* PASS setSearch prop ✅ */}
      <SearchBar setSearch={setSearch} />
      <div className="items-display">
        {/* Use filteredProducts instead of products ✅ */}
        <ProductCardList type="products" customItems={filteredProducts} />
      </div>
    </div>
  );
}

export default Store;