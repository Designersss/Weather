import './App.css'
import {fetchWeather} from "./http/WeatherApi.js";
import {useEffect, useState} from "react";

function App() {
    const [region, setRegion] = useState('')
    console.log(region)

    const finalWeather = () => {
        fetch(region)
    }
    const fetch = async (reg) => {
        await fetchWeather(reg).then(res => res.json()).then(res => console.log(res))
    }
    return (
        <div className="App">
            <input type="text" value={region} onChange={e => setRegion(e.target.value)}/>
            <button onClick={finalWeather}>GO</button>
        </div>
    )
}

export default App
