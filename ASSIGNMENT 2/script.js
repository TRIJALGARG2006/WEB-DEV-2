const API_KEY = '5096d0ef44d1c2542f8ded651c439b5a';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const consoleOutput = document.getElementById('consoleOutput');
const weatherContent = document.getElementById('weatherContent');
const historyContainer = document.getElementById('historyContainer');

let historyArray = [];

searchBtn.addEventListener('click', function() {
    const city = cityInput.value;

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    consoleOutput.innerHTML = "";
    weatherContent.style.display = "none";
    consoleOutput.innerHTML += "Sync Start<br>";

    getWeather(city);

    consoleOutput.innerHTML += "Sync End<br>";
});

async function getWeather(city) {
    consoleOutput.innerHTML += "<span style='color: lightblue;'>[ASYNC] start fetching</span><br>";

    setTimeout(function() {
        consoleOutput.innerHTML += "<span style='color: lightblue;'>setTimeout (Macrotask)</span><br>";
    }, 0);

    Promise.resolve().then(function() {
        consoleOutput.innerHTML += "<span style='color: pink;'>Promise.then (Microtask)</span><br>";
    });

    try {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY + "&units=metric";
        const response = await fetch(url);

        if (!response.ok) {
            alert("City not found. Try again!");
            return;
        }

        const data = await response.json();

        document.getElementById('w-city').innerText = data.name;
        document.getElementById('w-temp').innerText = data.main.temp + " °C";
        document.getElementById('w-desc').innerText = data.weather[0].description;
        document.getElementById('w-humidity').innerText = data.main.humidity + "%";

        weatherContent.style.display = "block";

        if (!historyArray.includes(data.name)) {
            historyArray.push(data.name);

            const btn = document.createElement("button");
            btn.className = "history-btn";
            btn.innerText = data.name;

            btn.addEventListener("click", function() {
                cityInput.value = data.name;
                searchBtn.click();
            });

            historyContainer.appendChild(btn);
        }

        consoleOutput.innerHTML += "<span style='color: yellow;'>[ASYNC] Data received</span><br>";

    } catch (err) {
        alert("Something went wrong checking the weather.");
    }
}