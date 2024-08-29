document.getElementById("wform").addEventListener("submit",function(e){
	  e.preventDefault();
	  const cityname = document.getElementById("cityname").value;
	  getWeatherInfo(cityname)
	
})

function getWeatherInfo(cityname){
	console.log(cityname)
	let key = "0dce1193b41d4395a6775552241507"
	let url =
	`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityname}&aqi=no`
	//console.log(url)
	
	fetch(url)
	.then(result=>result.json())
	.then(data => displayWeather(data))
	.catch(error =>{
	      console.log("Error while fetching url")
	})
}
 function displayWeather(data){
	//console.log(data) 
  
  let winfo = document.getElementById("winfo")	
  winfo.innerHTML = ``;
  
	let location = document.createElement("p")
	location.textContent = `City Name : ${data.location.name}`
	
	let region = document.createElement("p")
	region.textContent = `State Name : ${data.location.region}`
	
	let country = document.createElement("p")
	country.textContent = `Country Name : ${data.location.country}`
	
	let temp = document.createElement("p")
	temp.textContent = `Tempreture : ${data.current.temp_c}`
	
	let humidity = document.createElement("p")
	humidity.textContent = `humidity : ${data.current.humidity}`
	
	winfo.appendChild(location)
	winfo.appendChild(region)
	winfo.appendChild(country)
	winfo.appendChild(temp)
	winfo.appendChild(humidity)
 }


/*
http://api.weatherapi.com/v1/current.json?key=0dce1193b41d4395a6775552241507&q=Damoh%20&aqi=no
*/