const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const humidity = document.querySelector("#humidity");

const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const dayAfter = document.querySelector("#dayAfter");

const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=6.52&lon=3.37&units=imperial&appid=ba2dfc25dcca7192e7f6093d43a8f2a6";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=6.52&lon=3.37&units=imperial&appid=ba2dfc25dcca7192e7f6093d43a8f2a6";

async function apiFetch() {
    try {
        let currentResponse = await fetch(currentUrl);
        let forecastResponse = await fetch(forecastUrl);
        if (currentResponse.ok) {
            let cData = await currentResponse.json();
            // console.log(cData);
            displayResults(cData);
        } else {
            throw Error(await currentResponse.text());
        }

        if (forecastResponse.ok) {
            let fData = await forecastResponse.json();
            console.log(fData);
            displayForecast(fData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error)
    }
}

// async function apiForecastFetch() {
//     try {
//         let response = await fetch(forecastUrl)
//     } catch (error) {

//     }
// }

function displayResults(cData) {
    let icon = `https://openweathermap.org/img/wn/${cData.weather[0].icon}.png`;
    let descr = cData.weather[0].description;
    weatherIcon.setAttribute("src", icon);
    weatherIcon.setAttribute("alt", desc);
    temp.innerHTML = `Temp: ${cData.main.temp}\u00B0F`;
    desc.innerHTML = `${descr}`;
    humidity.innerHTML = `Humidity: ${cData.main.humidity}`;
    today.innerHTML = ` Today: ${cData.main.temp}\u00B0F`;

}


function getWeekdayName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
}

function displayForecast(data2) {
tomorrow.innerHTML = `${getWeekdayName(data2.list[0].dt_txt)}: ${data2.list[0].main.temp}\u00B0F`;
dayAfter.innerHTML = `${getWeekdayName(data2.list[8].dt_txt)}: ${data2.list[8].main.temp}\u00B0F`;
}




apiFetch();