import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({info}) {
    const img_url = "https://images.unsplash.com/photo-1614434163906-5520f43d4e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9ybWFsJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

    const COLD_URL ="https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.webp?a=1&b=1&s=612x612&w=0&k=20&c=ao9WM40Bt2WCdcjyM-TLuj_kFvRMFlqj1vj6BKV8Y6I=";
    const HOT_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.webp?a=1&b=1&s=612x612&w=0&k=20&c=tSEjCtcF4P_7EQYMM-Ot8JcTkNYxprXPDW17nUOWtGs=";
    const RAIN_URL = "https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.webp?a=1&b=1&s=612x612&w=0&k=20&c=vUlQgCd942j9Z5LU7yneBVZD3LuOCQtE-QLJpg_FeiY=";

    return (
        <div className="InfoBox">
            <h2>Weather Info -  <i>{info.weather}</i></h2>
            <br></br>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div> Temperature - {info.temp}&deg;C</div>
                        <div> Humidity - {info.humidity}</div>
                        <div> Min Temperature - {info.tempMin}&deg;C</div>
                        <div> Max Temperature - {info.tempMax}&deg;C</div>
                        <div> The Weather can be described as <i>{info.weather}</i> and feels like - {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}