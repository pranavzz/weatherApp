const cityInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");

const getCityDetails = async () => {
  const cityName = cityInput.value.trim(); // Remove extra spaces
  if (!cityName) {
    return;
  }
  const API_URL = ` http://api.weatherapi.com/v1/current.json?key=98e7ffbd323a42658ca165739232809&q=${cityName}&aqi=yes`;

  await fetch(API_URL)
  .then(res => res.json()).then(data=>{
      console.log(data);
      localStorage.setItem("temperature",data.current.temp_c);
      localStorage.setItem("temperaturef",data.current.temp_f);
      localStorage.setItem("humidity",data.current.humidity);
      localStorage.setItem("wind",data.current.wind_kph);
      localStorage.setItem("location",data.location.name);
      window.location.href = "weather.html";
  })
  .catch((error)=>{
      alert("Please enter valid city name");
  })
  
};


searchButton.addEventListener("click", getCityDetails);