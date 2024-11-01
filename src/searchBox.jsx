import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({ updateinfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3272554e06602ecd6ac06b4e7f2486a5";

    let getweatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,

            }
            console.log(result)
            return result

        } catch (error) {
            throw error;
        }

    }



    let handlechange = (event) => {
        setCity(event.target.value)
    }

    let handlesubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city)
            setCity("");
            let newinfo = await getweatherInfo();
            updateinfo(newinfo)
        } catch {
            setError(true)
        }
    }

    return (
        <div className='SearchBox'>
            <h3> Search for the Weather </h3>
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange} />
                <br></br><br></br>
                <Button variant="contained" type="submit" >
                    Search
                </Button>

                {error && <p style={{color:"red"}}> No such place found in our API </p>}


            </form>
        </div>
    )
}