import React from 'react';
import {observer} from "mobx-react";

const WeatherPages = observer(({countries}) => {
    return (
        <div className='shadow-2xl p-5 flex items-center justify-between rounded-md'>
            <div>
                <p>Погода: {countries.name}</p>
                <p>Страна: {countries.location}</p>
                <p>Температура: {countries.temp}°</p>
            </div>
            <img src={countries.img} alt="qwe"/>
        </div>
    );
});

export default WeatherPages;