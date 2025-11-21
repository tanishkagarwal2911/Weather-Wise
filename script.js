async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("result");

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name!";
        return;
    }

    const apiKey = "210377ee7066bd96c24c182b49c0cd42";
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        resultDiv.innerHTML = "City not found!";
    } else {
        resultDiv.innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} km/h</p>
        `;
    }
}