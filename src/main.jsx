import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CountryStore from "./store/CountryStore.js";
import {fetchWeather} from "./http/WeatherApi.js";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        country: new fetchWeather()
    }}>
        <App/>
    </Context.Provider>
);