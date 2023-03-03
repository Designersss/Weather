import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {fetchWeather} from "./api/WeatherApi.js";
import CountryStore from "./store/CountryStore.js";
import App from "./App.jsx";

export const Context = createContext(null)
ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{
        country: new CountryStore()
    }}>
        <App/>
    </Context.Provider>
);