import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {fetchWeather} from "./http/WeatherApi.js";
import CountryStore from "./store/CountryStore.js";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        country: new CountryStore()
    }}>
        <App />
    </Context.Provider>
);