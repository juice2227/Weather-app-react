import { useState } from "react";
import axios from "axios";

export default function Weather(){
    const [city, setCity] = useState('')
    const handleInputChange =(e)=>{
        setCity(e.target.city)

    }
    //fetchData
    const fetchData = () => {
        //fetch from api
    const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={YOUR_API_KEY}`)

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