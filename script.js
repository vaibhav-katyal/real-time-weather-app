const apikey = "d6b33cb674af5c57c51c38e531610c5f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-button")
const weatherIcon = document.querySelector(".weather-image img")

async function getWeatherData(city){
    const response = await fetch(apiurl+ city+ `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".city").innerHTML = "----";
        document.querySelector(".temp").innerHTML = "--"+"°c";
        document.querySelector(".check_humidity").innerHTML = "--"+"%";
        document.querySelector(".check_wind").innerHTML = "--"+" km/h";
    }
    else{
        const data = await response.json()

        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".check_humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".check_wind").innerHTML = Math.round(data.wind.speed)+" km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "clear.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "snow.png"
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weatherIcon.src = "thunderstorm.png"
        }

        document.querySelector(".err").style.display = "none";

    }
}
searchBtn.addEventListener("click", ()=>{
    getWeatherData(searchbox.value)
})

searchbox.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        searchBtn.click();
    }
})
