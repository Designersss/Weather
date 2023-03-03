import './App.css'
import {fetchWeather} from "./api/WeatherApi.js";
import {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react";
import {Context} from "./main.jsx";
import WeatherPages from "./components/WeatherPages.jsx";
import {users} from "./objectsUsers/user.js";

const App = observer(() => {
    const {country} = useContext(Context)
    const [region, setRegion] = useState('')
    const [addHtml, setAddHtml] = useState(false)
    const [countries, setCountries] = useState([])
    const idNow = Math.random().toString(36).substr(2, 9) + 1
    const fetch = (reg) => {
        fetchWeather(reg).then(res => res.json()).then(res => country.setCountry(res))
    }
    const finalWeather = () => {
        fetch(region)
        setTimeout(() => {
            users.name = country.country.location.name
            users.location = country.country.location.country
            users.temp = country.country.current.temp_c
            users.img = country.country.current.condition.icon
            setCountries([...countries, users])
            console.log(countries)
            console.log(country.country)
            setAddHtml(true)
        }, 500)
    }
    console.log(Math.random().toString(36).substr(5, 20))
    return (
        <div className="App">
            <input type="text" value={region} onChange={e => setRegion(e.target.value)}/>
            <button onClick={finalWeather}>GO</button>
            {addHtml
                ?
                    <div>
                        <div>
                            {countries.map(reg =>
                                <div key={reg.id}>
                                    <WeatherPages countries={reg} />
                                </div>
                            )}
                        </div>
                    </div>
                :
                    <div>
                        NON
                    </div>

            }
        </div>
    )
})

export default App
