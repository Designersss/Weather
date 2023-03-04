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
    let id = 1
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
            setAddHtml(true)
        }, 500)
    }
    return (
        <div className="App">
            <div className='flex justify-center items-center'>
                <input className='flex p-4 shadow-2xl outline-0' type="text" value={region} onChange={e => setRegion(e.target.value)}/>
                <button className='flex p-4 shadow-2xl' onClick={finalWeather}>Поиск</button>
            </div>
            {addHtml
                ?
                    <div>
                        <div className='grid grid-cols-2 gap-8 mt-20'>
                            {countries.map(reg =>
                                <div key={id++}>
                                    <WeatherPages countries={reg} />
                                </div>
                            )}
                        </div>
                    </div>
                :
                    <div className='flex justify-center items-center mt-12'>
                        Найдите погоду
                    </div>

            }
        </div>
    )
})

export default App
