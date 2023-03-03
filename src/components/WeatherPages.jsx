import React from 'react';
import {observer} from "mobx-react";

const WeatherPages = observer(({countries}) => {
    return (
        <div className='w-52 h-14 shadow-2xl'>
            {countries.name}
            {countries.location}
            {countries.temp}
            <img src={countries.img} alt="qwe"/>
        </div>
    );
});

export default WeatherPages;