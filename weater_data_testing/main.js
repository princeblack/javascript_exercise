let weekContainer =  document.getElementById("week-container")
// weekContainer.style.display="none"
let search = document.getElementById("search");
const submit = document.getElementById("submit");
const apiId="7db45b5a58a7c1597b2bbae96008d4ad";
let city = "";
let url=`http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=${apiId}&units=metric`;

/**
 * api key and city name
 */
let weekUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=${apiId}&units=metric`;

//  submit the city name
submit.onclick = ()=>{
    if (search.value !== "" && search.value.length >1) {
        city = search.value
        url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7db45b5a58a7c1597b2bbae96008d4ad&units=metric`;

        weekUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiId}&units=metric`;
        performGetRequest()
        getWeatherData()
        // weekContainer.style.display="block"
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
            // bodyBackground(Response.data)
            weather(Response.data)
        })     
    } catch (error) {
        console.log(error);
    }
}
performGetRequest()

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


let weekTitle = document.getElementById("week-title");
let day2 =  document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");
let day6 =  document.getElementById("day6");
let day7 = document.getElementById("day7");
let temp2 = document.getElementById("temp2");
let temp3 = document.getElementById("temp3");
let temp4 = document.getElementById("temp4");
let temp5 = document.getElementById("temp5");
let temp6 = document.getElementById("temp6");
let temp7 = document.getElementById("temp7");


/**
 * waiting for Url whit async
 */
getWeatherData = async () => {
    try {
      const res = await axios.get(weekUrl);    
      getAvgTempWeather(res.data.list, res.data.city, res.data.list[0].weather[0]);
    } catch (error) {
      console.log(`${name} is very busy at the moment. Please try again later`);
    }
  };


let myArray = new Array;

getAvgTempWeather = (weatherData, cityData, ) => {
    weekTitle.innerHTML=`Weekly overview for ${cityData.name}, ${cityData.country}`;

  const dt = weatherData.map(el => {
    const newEl = {
      temp: el.main.temp,
      date: el.dt_txt.slice(0, 10)
    };        
    return newEl;
  });

  dt.reduce(myReducer, {
    cnt: 0,
    temp: 0,
    date: dt[0].date
  });

};
let conteur = 0;
printOutWeather = dt => {
  conteur++
  switch (conteur) {
    case 2:
      day2.innerHTML =`${dt.date}`
      temp2.innerHTML =`${Math.floor(dt.temp / dt.cnt)}°C`
    case 3:
        day3.innerHTML =`${dt.date}`
        temp3.innerHTML =`${Math.floor(dt.temp / dt.cnt)}°C`
    case 4:
        day4.innerHTML =`${dt.date}`
        temp4.innerHTML =`${Math.floor(dt.temp / dt.cnt)}°C`
    case 5:
        day5.innerHTML =`${dt.date}`
        temp5.innerHTML =`${Math.floor(dt.temp / dt.cnt)}°C` 
    default:
      break;
  }   
};    

myReducer = (acc, cur, index, arr) => {
  // I am still in the same day
  if (cur.date === acc.date) {
    //add this temp
    acc.temp += cur.temp;
    acc.cnt++;
    if (index == arr.length - 1) printOutWeather(acc);
  } else {
    // A new days i born
    printOutWeather(acc);
    acc = {
      cnt: 0,
      temp: 0,
      date: cur.date
    };
    myArray.push(acc)
    
  }

  return acc;
};
