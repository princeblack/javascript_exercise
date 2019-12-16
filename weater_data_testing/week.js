let getDate = new Date()
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
// day2.innerHTML = ;


const name = search.value;
const apiKey = `7db45b5a58a7c1597b2bbae96008d4ad`;
let options = "metric";


let urlWeek = `https://api.openweathermap.org/data/2.5/forecast?q=berlin&appid=${apiKey}&units=${options}`;

getWeatherData = async () => {
  try {
    const res = await axios.get(urlWeek);
    // if (type === "now") printTodaysWeather(res.data.list[0], res.data.city);
     getAvgTempWeather(res.data.list, res.data.city);     
  } catch (error) {
    console.log(`${name} is very busy at the moment. Please try again later`);
  }
};

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date(dateString);
let dayName = days[d.getDay()];

getAvgTempWeather = (weatherData, cityData) => {
  console.log(`Weekly overview for ${cityData.name}, ${cityData.country}`);
  const dt = weatherData.map(el => {
    const newEl = {
      temp: el.main.temp,
      date: el.dt_txt.slice(0, 10)
    };
    console.log(el.dt_txt);
    return newEl;
  });

  dt.reduce(myReducer, {
    cnt: 0,
    temp: 0,
    date: dt[0].date
  });
};

let array = new Array;
printOutWeather = dt => {
  if (dt) {
      array.push(dt)
  } 
  day2.innerHTML =  `${Math.floor(array[0].temp / array[0].cnt)}°c`
  day3.innerHTML =  `${array[2]}`

  console.log(array[1]);
  
//   console.log(`The temp for ${dt.date} is ${dt.temp / dt.cnt}`);
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
  }

  return acc;
};

getWeatherData();
