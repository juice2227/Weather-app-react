import { useEffect, useState } from "react";
import axios from "axios";


export default function Weather(){
    const [city, setCity] = useState('')
    const [weatherData, setweatherData] = useState(null)
    //handle input onchange
    const handleInputChange =(e)=>{
        setCity(e.target.city)

    }
    //fetchData
    const fetchData = () => {
        //fetch from apire  
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={ad94a9611fef414000cb6b3b4fedc9cc}`)
    setweatherData(response.data)
    console.log(weatherData)

    }
    useEffect{()=>{
        fetchData()
    }.[]
    
    }
    //handleSubmit
    const handleSubmit =(e) =>{
        e.preventDefault()
        fetchData()

    }
    return(
        <div>
            <form action="">
                <input value={city} onChange={handleInputChange} placeholder="Enter city name" /> <br />
                <br />
                <button onSubmit={handleSubmit}>Get Weather</button>
            </form> 
        </div>
    );
}