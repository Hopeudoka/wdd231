const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const humidity = document.querySelector("#humidity");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=6.52&lon=3.37&units=imperial&appid=ba2dfc25dcca7192e7f6093d43a8f2a6";

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    let icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let descr = data.weather[0].description;
    weatherIcon.setAttribute("src", icon);
    weatherIcon.setAttribute("alt", desc);
    temp.innerHTML = `Temp: ${data.main.temp}\u00B0F`;
    desc.innerHTML = `${descr}`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;
}





apiFetch();