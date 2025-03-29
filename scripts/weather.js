const currentTemp = document.querySelector("#current-temp");
const weather = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=imperial&appid=ba2dfc25dcca7192e7f6093d43a8f2a6";

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = data.main.temp;
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weather.setAttribute("src", icon);
    weather.setAttribute("alt", desc);
    figcaption.textContent = `${desc}`;
}

apiFetch();