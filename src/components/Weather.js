import axios from "axios"
import { useState } from "react"
import { api } from "../constants/api"
import '../assets/css/Weather.css'
export const Weather = () => {
    const city = 'Skopje'
    const [weather, setWeather] = useState()
    const getWeatherInfo = (selectedCity) => {
        axios({
            url: `${api.base}/forecast?q=${selectedCity}&units=metric&appid=${api.key}`,
            method: 'GET'
        })
            .then(res => {
                setWeather(res.data)
            })
            .catch(err => {
                alert(err)
            })
    }
    return (
        <div className="local-weather">
            <br />
            <div className="header_buttons">
                <button
                    className="cityButton"
                    onClick={() => getWeatherInfo('Skopje')}>
                    Skopje
                </button>
                <button
                    className="cityButton"
                    onClick={() => getWeatherInfo('Bitola')}>
                    Bitola
                </button>
                <button
                    className="cityButton"
                    onClick={() => getWeatherInfo('Prilep')}>
                    Prilep
                </button>
                <button
                    className="cityButton"
                    onClick={() => getWeatherInfo('Berlin')}>
                    Berlin
                </button>
            </div>
            <div className="local-container">
                {weather && weather.list.map(w => {
                    return (
                        <div key={w.dt} className='card'>
                            <div className="location-box">
                                <div className="location">
                                    {weather.city.name}, {weather.city.coutry}
                                </div>
                                <div className="date">
                                    {w.dt_txt}
                                </div>

                            </div>
                            <div className="weather-box">
                                <div className="temp">
                                    {Math.round(w.main.temp)}°C
                                </div>
                                <div className="weather">
                                    {w.weather[0].main}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}