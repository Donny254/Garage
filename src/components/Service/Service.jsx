// use userContext to pass data
// use userContext to pass data
import { useState } from 'react'
import './Service.css'



function Service() {

   function ServiceCard({ service }) {
    return (
      <div className="service-card">
        <img
          src={service.image}
          alt={service.name}
          className="service-image"
        />
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    );
  }
    const [services] = useState(
        [
            {
                id: 1,
                name: "Painting ",
                image: "https://imgs.search.brave.com/ehnUuhSUT0Rk4Ri8lktwUMPrVQrCbzMn2UzoG6TkpgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2Lzc1LzI5Lzc5/LzM2MF9GXzE2NzUy/OTc5OTZfQzNBaTB3/UUU5SzZaUVdrbm91/NGNvRWR6ams5R3N0/bXouanBn",
                description: "Get the best Painting work for your car "
            },
            {
                id: 2,
                name: "Body Restoration",
                image: "https://imgs.search.brave.com/juGTJl0Qf17W3usk4I2OKhGloie8PdwbKGF-QTgdiPY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/Njg1MTQwMS9waG90/by9hdXRvLW1lY2hh/bmljLXN0cmFpZ2h0/ZW5pbmctY2FyLWJv/ZHktaW4tY2FyLXNl/cnZpY2Utc3RhdGlv/bi53ZWJwP2E9MSZi/PTEmcz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Wkl3U3Fjc1ZWQVBa/LVZKOFFqUGZ0UGs5/ZDVDVmo4TEpSUlVj/bEM3SUNfdz0",
                description: "Damaged Car worry less"
            },
            {
                id: 3,
                name: "Detail Cleaning ",
                image: "https://imgs.search.brave.com/EIa1xf666aFJ3RfOy3gxe9CBFqMTe2v5fahTjYyq1jw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNjg3/MzE4NS9wZXhlbHMt/cGhvdG8tNjg3MzE4/NS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
                description: " Get that fresh new look from us "
            },
            {
                id: 4,
                name: "Engine",
                image: "https://imgs.search.brave.com/rsZ9ORJ2jNAYsbrOGhfgHJOxxWAtRhTrozGkBtEEgsY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/MDk1MTE2MS9waG90/by9lbmdpbmUtcGlz/dG9uLXJlcGFpci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NEhqTHE3Z0lXZEJ0/U2RqLVFrT29jQ2hh/OHRUblN0ZWN2RHZf/bVdrOFZhWT0",
                description: "Engine issues or wanna upgrade it "
            }
            ,
            {
                id: 5,
                name: "Lights n Sound ",
                image: "https://imgs.search.brave.com/I5ZBarBLJP9Ozp15zoA3x6p68UDOamIDm4tZoKyu61o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL21vZGVy/bi1jYXItaGVhZGxp/Z2h0LXR1cm5lZC1v/bi0yNjBudy0yNTI2/NDkwMDg5LmpwZw",
                description: "Restore or upgrade youur lights n sound from the best "
            }
        ]
    )

    return (
        <>

            <div className='services'>
                {services.map(service => <ServiceCard key={services.id} service={services} />)}
            </div>
        </>
    )
}

export default Service
