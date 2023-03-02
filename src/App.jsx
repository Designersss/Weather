import './App.css'
import {fetchWeather} from "./http/WeatherApi.js";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Context} from "./main.jsx";
import {createLogger} from "vite";

const App = observer(() => {
    const {country} = useContext(Context)
    const [region, setRegion] = useState('')
    const [use, setUse] = useState()
    const finalWeather = () => {
        fetch(region)
    }
    const fetch = async (reg) => {
        await fetchWeather(reg).then(res => res.json()).then(res => country.setCountry(res))
    }

    // ДОДЕЛАТЬ ОШИБКУ //





    // ДОДЕЛАТЬ ОШИБКУ //

    return (
        <div className="App">
            <input type="text" value={region} onChange={e => setRegion(e.target.value)}/>
            <button onClick={finalWeather}>GO</button>
        </div>
    )
})

export default App
