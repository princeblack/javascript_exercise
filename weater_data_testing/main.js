let search = document.getElementById("search");
const submit = document.getElementById("submit");
let city = "";
let url=`http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=7db45b5a58a7c1597b2bbae96008d4ad&units=metric`;

//  submit the city name
submit.onclick = ()=>{
    if (search.value !== "" && search.value.length >1) {
        city = search.value
        url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7db45b5a58a7c1597b2bbae96008d4ad&units=metric`;
        performGetRequest()
        search.value = "";
    } else {
        alert("please fill out the city name")
    }
}

search.addEventListener("keyup", function (e) {
    if (e.keyCode === 13 ) {
        submit.onclick();
    }    
})

//   get data forme the api 
const performGetRequest = async () =>{
    try {
        let getUrl = await axios.get(url)
        .then(Response =>{
            console.log(Response.data);
            bodyBackground(Response.data)
            weather(Response.data)
        })     
    } catch (error) {
        console.log(error);
    }
}
performGetRequest()

//  body background 
const bodyBackground = (data)=>{
    
    // array of different description of weather
    let weaterDescr = ["mist","Smoke","Haze","sand/ dust whirls","fog","sand","dust","volcanic ash","squalls","tornado"]

    // choose the background image  based to the weather description
    if (data.weather[0].description == "clear sky") {
        document.body.style.background ="url('img/clear-sky.jpg')";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }else if (data.weather[0].description.includes("cloud")) {
        document.body.style.background ="url('img/cloud.jpg')";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }else if (weaterDescr.includes( data.weather[0].description)) {
        document.body.style.background ="url('img/fog.jpg')";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }else if (data.weather[0].description.includes("snow")) {
        document.body.style.background ="url('img/snow.jpg')";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }else if (data.weather[0].description.includes("rain")) {
        document.body.style.background ="url('img/rain.jpg')";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }else if (data.weather[0].description.includes("drizzle")) {
        document.body.style.background ="url('img/drizzle.jpeg)";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }else if (data.weather[0].description.includes("thunderstorm")) {
        document.body.style.background ="url('img/storm.jpg)";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "bottom";
    }
}

const weather = (data)=>{
    //  weather icon image
    let icon = document.getElementById("icon");
    let iconId = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    icon.src = iconUrl;
    // weather city
    let city = document.getElementById("city");
    city.innerHTML= data.name;
    // weather country
    let country = document.getElementById("country")
    country.innerHTML= data.sys.country;


    // weather matric
    let weater =  document.getElementById("temp");
    weater.innerHTML= Math.floor(data.main.temp) + "°c";
    // weather description
    let description = document.getElementById("description");
    description.innerHTML = data.weather[0].description;
    // weather humidity
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = "Humidity : "+data.main.humidity + "%";
    // weather temp_min
    let temp_min = document.getElementById("temp_min");
    temp_min.innerHTML = "Temp min : " + Math.floor(data.main.temp_min)+ "°c";
    // weather temp_max
    let temp_max = document.getElementById("temp_max");
    temp_max.innerHTML = "Temp max : " + Math.floor(data.main.temp_max)+ "°c";
    // weather wind
    let wind = document.getElementById("wind");
    wind.innerHTML="Wind:";
    // weather speed
    let speed =  document.getElementById("speed");
    speed.innerHTML = "Speed : " + data.wind.speed;
    // weather deg
    let deg =  document.getElementById("deg");
    deg.innerHTML= "Deg : " + data.wind.deg;
}
