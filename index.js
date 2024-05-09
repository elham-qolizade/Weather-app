const locationElement = document.querySelector("#location");
const descriptionElement = document.querySelector("#description");
const temperatureElement = document.querySelector("#temperature");
const btn = document.querySelector("#searchButton");
const locationInput = document.querySelector("#locationInput");

const apikey = 'dd794fa3e29e3acf5256adea01651cd9';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

btn.addEventListener("click", () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});


function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            locationElement.textContent = data.name;
            descriptionElement.textContent = data.weather[0].description;
            temperatureElement.textContent = data.main.temp + " °C";
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById('weatherIcon').src = iconUrl;
        })
        .catch(error => console.error("Error fetching data: ", error));
}
