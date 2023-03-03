import './App.css'
import {fetchWeather} from "./http/WeatherApi.js";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Context} from "./main.jsx";

const App = observer(() => {
    const {country} = useContext(Context)
    const [region, setRegion] = useState('')
    const [addHtml, setAddHtml] = useState(false)
    const [countries, setCountries] = useState([])

    const fetch = (reg) => {
        fetchWeather(reg).then(res => res.json()).then(res => country.setCountry(res))
    }
    const finalWeather = () => {
        fetch(region)
        setTimeout(() => {
            setAddHtml(true)
            countries.push(region)
        }, 1000)
        console.log(country.country)
    }
    return (
        <div className="App">
            <input type="text" value={region} onChange={e => setRegion(e.target.value)}/>
            <button onClick={finalWeather}>GO</button>
            {addHtml
                ?
                    <div>
                        Погода {country.country.location.name} : {country.country.current.temp_c}
                    </div>
                :
                    <div>
                        NONE
                    </div>

            }
        </div>
    )
})

export default App
