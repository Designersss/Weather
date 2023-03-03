export const fetchWeather = (country) => {
    const weather = fetch(`http://api.weatherapi.com/v1/current.json?key=b15fb1cf22a748fdb37173328230203&q=${country}&aqi=no`)
    return weather
}
