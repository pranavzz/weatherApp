const temp = localStorage.getItem("temperature");
const tempf = localStorage.getItem("temperaturef");
const loc = localStorage.getItem("location");
const humid = localStorage.getItem("humidity");
const windSpeed = localStorage.getItem("wind");


const divTag1 = document.getElementById("Temp");
divTag1.innerText = divTag1.innerText + temp + " °C";

const divTag1f = document.getElementById("Tempf");
divTag1f.innerText = divTag1f.innerText + tempf + " F";
const divTag2 = document.getElementById("location");
divTag2.innerText = divTag2.innerText + loc.toUpperCase();
const divTag3 = document.getElementById("windSpd");
divTag3.innerText = divTag3.innerText + windSpeed + " m/h";
const divTag4 = document.getElementById("humid");
divTag4.innerText = divTag4.innerText + humid + " %";

const backButton = document.getElementById("backButton");

const goBack = () => {
  window.location.href = "index.html";
};


backButton.addEventListener("click", goBack);

