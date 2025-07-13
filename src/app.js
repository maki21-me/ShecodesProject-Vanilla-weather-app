function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
    let temperature=response.data.temperature.current; 
    let cityElement=document.querySelector("#city");
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind");
let timeElement=document.querySelector("#time");
let date=new Date(response.data.time*1000);

    console.log(response.data);

    timeElement.innerHTML=formatDate(date);
    cityElement.innerHTML=response.data.city;  
    descriptionElement.innerHTML=response.data.condition.description;
    temperatureElement.innerHTML=Math.round(temperature);
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    windElement.innerHTML=`${response.data.wind.speed}km/h`;
}


function formatDate(date){
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days=["Sunday", 
        "Monday", 
        "Tuesday",
         "Wednesday", 
         "Thursday",
          "Friday", 
          "Saturday"];
   let day=days[date.getDay()];
   if(minutes<10){
       minutes=`0${minutes}`;
   }
   return `${day} ${hours}:${minutes}`;
}

function searchCity(city){   
let apiKey="b2035o63tb4a7301e1984db5812a96f1";
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchFormSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    //console.log(searchInput.value);
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchFormSubmit);
searchCity("Addis Ababa");











































