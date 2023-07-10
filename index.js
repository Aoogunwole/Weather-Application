// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}





// b65a7db9d35ed009bc74cd163d49e8df
document.getElementById('btn').addEventListener("click", () => {
    
    const city = document.getElementById("search").value;

   
    link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b65a7db9d35ed009bc74cd163d49e8df`;
    const xhr =new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            const response = JSON.parse(this.responseText)
            document.getElementById("w-location").innerHTML = response.name;
            document.getElementById("w-string").innerHTML = (response.main.temp - 273.15).toFixed(2) + "&degC";
            document.getElementById("w-icon").src = "https://openweathermap.org/img/w/" + response.weather[0].icon+".png";
            
            document.getElementById("w-dewpoint").innerHTML = `Country: ${response.sys.country}`;
            document.getElementById("w-humidity").innerHTML =`Relative Humidity; ${response.main.humidity}%`;
            document.getElementById("w-feels-like").innerHTML = `Description: ${response.weather[0].description}`
            document.getElementById("w-wind").innerHTML = `Wind Degree: ${response.wind.deg}, Wind Speed: ${response.wind.speed}m/s`
        }
        else{
            alert("Input a valid city name");
        }
        

        
    }

    
    xhr.send();
})

