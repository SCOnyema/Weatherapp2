const form = document.querySelector('form');
const input = document.querySelector('#city');
const weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value;
    const apiKey = '75bdbfe423c0426d95f195556232302'; // replace with your API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.location.name;
            const weather = data.current.condition.text;
            const temp = data.current.temp_c;
            const feelsLike = data.current.feelslike_c;
            const humidity = data.current.humidity;
            weatherDiv.innerHTML = `The weather in ${location} is ${weather} with a temperature of ${temp}°C (feels like ${feelsLike}°C). Humidity: ${humidity}%`;
        })
        .catch(() => {
            weatherDiv.innerHTML = `There was an error retrieving the weather for ${city}. Please try again.`;
        });
});
