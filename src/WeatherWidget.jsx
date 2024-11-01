import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";

export default function WeatherWidget() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike:"" ,
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        weather: "",

    })

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <div>
            <h2>Weather Widget</h2>
            <SearchBox  updateinfo = {updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}