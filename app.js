 
//  let locationer = navigator.geolocation.getCurrentPosition((location)=>{
//      console.log(location) 
//         //  location.coords.longitude
//  })
//  console.log(locationer)
let lat = 24.8880472 ;
let lon = 67.2033565 ;
let temp = document.getElementById("temp");
let cityName = document.getElementById("show-city-name");
let weatherName =document.getElementById("weather-name");
let humanity = document.getElementById ("humanity");
let wind = document.getElementById ("wind");
let clouds = document.getElementById ("clouds");
let weatherImage = document.getElementById("weather-image")
let body = document.getElementById ("body");
console.log( weatherImage.src)
// console.log(temp)
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5d33d2b97007734519698d56ba222761&units=metric`)
.then(function(data){
     return data.json()
})
.then((data)=>{
    // console.log(temp)
    console.log(data)
    
  let value = Math.round(data.main.temp );
  for(let i = 0 ; i < data.weather.length ; i++){
    console.log(data.weather[i].main)
    weatherName.innerHTML = data.weather[i].main;
    if(data.weather[i].main  === "Rain" ) {
        weatherImage.src = "public/rain.png";
        body.style.backgroundImage = "url('public/rain.gif')";
     

      }
    else  if(data.weather[i].main  === "Haze" ) {
        weatherImage.src = "public/haze.png"; 
        // body.style.backgroundImage = "url('public/haze.gif')";
        // body.style.backgroundRepeat = "no-repeat";
        // body.style.backgroundSize = "cover";
      }
    else  if(data.weather[i].main  === "Clouds" ) {
        weatherImage.src = "public/clouds.png";
      }
    else  if(data.weather[i].main  === "Clear" ) {
        weatherImage.src = "public/clear.png";
      }
 }
    temp.innerHTML = value + `<span style="font-size:30px;">°c</span>`
    cityName.innerHTML = data.name;
    humanity.innerHTML = data.main.humidity + `<span style="font-size:20px;">%</span>`;;
    wind.innerHTML = data.wind.speed + `<span style="font-size:20px;">km/hr</span>`;
    clouds.innerHTML = data.clouds.all + `<span style="font-size:20px;">%</span>`;

})

function abc(data){
    console.log(data.main)
}
function search(){

    let searchCity = document.getElementById("search-city");
    searchCity.innerHTML = "";
    console.log(searchCity.value)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=5d33d2b97007734519698d56ba222761&units=metric`)

.then((data)=>{
        return   data.json()

})
.then((data)=>{
    console.log(data.weather)
    console.log(weatherName)
    for(let i = 0 ; i < data.weather.length ; i++){
       console.log(data.weather[i].main)
       weatherName.innerHTML = data.weather[i].main;
      if(data.weather[i].main  === "Rain" ) {
        weatherImage.src = "public/rain.png";
        body.style.backgroundImage = "url('public/rain.gif')";
      }
    else  if(data.weather[i].main  === "Haze" ) {
        weatherImage.src = "public/haze.png";
        // body.style.backgroundImage = "url('public/haze.gif')";
        // body.style.backgroundRepeat = "no-repeat";
        // body.style.backgroundSize = "cover";
      }
    else  if(data.weather[i].main  === "Clouds" ) {
        weatherImage.src = "public/clouds.png";
      }
    else  if(data.weather[i].main  === "Clear" ) {
        weatherImage.src = "public/clear.png";
      }
    }
    cityName.innerHTML = data.name;
  let value = Math.round(data.main.temp );
  temp.innerHTML = value + `<span style="font-size:30px;">°c</span>`;
  humanity.innerHTML = data.main.humidity + `<span style="font-size:20px;">%</span>`;
  wind.innerHTML = data.wind.speed + `<span style="font-size:20px;">km/hr</span>`;
  clouds.innerHTML = data.clouds.all + `<span style="font-size:20px;">%</span>`;
    //  = data
})

}