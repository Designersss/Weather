import React from 'react';
import {observer} from "mobx-react";

const WeatherPages = observer(({countries}) => {
    return (
        <div>
            {countries.name}
            {countries.location}
            {countries.temp}
        </div>
    );
});

export default WeatherPages;