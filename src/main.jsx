import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {fetchWeather} from "./api/WeatherApi.js";
import CountryStore from "./store/CountryStore.js";

export const Context = createContext(null)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Context.Provider value={{
            country: new CountryStore()
        }}>

            <App/>
        </Context.Provider>
    </React.StrictMode>,
);