import { useState, useContext } from "react";
import UserContext from "../../UserContext.jsx";
import ProductCardList from "../ProductCardList/ProductCardList.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Service.css";

function Service() {
  const { total, setTotal } = useContext(UserContext);
  
  const [services] = useState([
    {
      id: 1,
      name: "Painting",
      image: "https://imgs.search.brave.com/ehnUuhSUT0Rk4Ri8lktwUMPrVQrCbzMn2UzoG6TkpgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2Lzc1LzI5Lzc5/LzM2MF9GXzE2NzUy/OTc5OTZfQzNBaTB3/UUU5SzZaUVdrbm91/NGNvRWR6ams5R3N0/bXouanBn",
      description: "Get the best Painting work for your car",
      amount: 5000 // Add amount for consistency
    },
    {
      id: 2,
      name: "Body Restoration",
      image: "https://imgs.search.brave.com/juGTJl0Qf17W3usk4I2OKhGloie8PdwbKGF-QTgdiPY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/Njg1MTQwMS9waG90/by9hdXRvLW1lY2hh/bmljLXN0cmFpZ2h0/ZW5pbmctY2FyLWJv/ZHktaW4tY2FyLXNl/cnZpY2Utc3RhdGlv/bi53ZWJwP2E9MSZi/PTEmcz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wkl3U3Fjc1ZWQVBa/LVZKOFFqUGZ0UGs5/ZDVDVmo4TEpSUlVj/bEM3SUNfdz0",
      description: "Damaged car? worry less!",
      amount: 15000
    },
    {
      id: 3,
      name: "Detail Cleaning",
      image: "https://imgs.search.brave.com/EIa1xf666aFJ3RfOy3gxe9CBFqMTe2v5fahTjYyq1jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNjg3/MzE4NS9wZXhlbHMt/cGhvdG8tNjg3MzE4/NS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
      description: "Get that fresh new look from us",
      amount: 3000
    },
    {
      id: 4,
      name: "Engine",
      image: "https://imgs.search.brave.com/rsZ9ORJ2jNAYsbrOGhfgHJOxxWAtRhTrozGkBtEEgsY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MDk1MTE2MS9waG90/by9lbmdpbmUtcGlz/dG9uLXJlcGFpci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NEhqTHE3Z0lXZEJ0/U2RqLVFrT29jQ2hh/OHRUblN0ZWN2RHZf/bVdrOFZhWT0",
      description: "Engine issues or want an upgrade?",
      amount: 20000
    }
  ]);

  // ADD SEARCH STATE ✅
  const [search, setSearch] = useState("");
  
  // Filter services based on search ✅
  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(search.toLowerCase()) ||
    service.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="service">
      <div className="service-header">
        <h1>Auto Services</h1>
        <p>Professional care for your vehicle</p>
      </div>
      {/* ADD SEARCH BAR ✅ */}
      <SearchBar setSearch={setSearch} />
      <div className="items-display">
        {/* USE ProductCardList instead of custom ServiceCard ✅ */}
        <ProductCardList customItems={filteredServices} />
      </div>
    </div>
  );
}

export default Service;