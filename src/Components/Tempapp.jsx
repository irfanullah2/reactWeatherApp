import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./css/style.css"

const Tempapp =()=>{
    const [city , setcity] = useState(null);
    const [search , setsearch] = useState('Pune');


    useEffect(()=>{
       const fetchApi =async()=>{
         const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e1ef7016d7573ff4cc4b9e2c51b8b54`
             const response = await fetch(url);
             const resjson = await response.json();
              console.log(resjson);
              setcity(resjson.main);

       }
       
        fetchApi();
    } , [search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input 
                    type="search"
                    className="inputfield"
                    placeholder="Enter City Name "
                    onChange={(event)=>{setsearch(event.target.value)
                    }}
                    value={search}
                     />

                </div>

{!city ? (
    <p className="error_msg">No data Found</p>
)  : (
   <>
   <div className="info">
                            <h2 className="location">
                            <i className="fa-solid fa-street-view">{search}</i>
                            </h2>
                            <h1 className="temp">{city.temp}°C</h1>

                            <h3 className="tempmin_max">{city.temp_min}°C | {city.temp_max}°C </h3>
                        </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                            </>
)
}

                        
</div>
        </>     
    )
}
export default Tempapp;