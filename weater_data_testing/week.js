let weekTitle = document.getElementById("week-title");
let day2 =  document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");
let day6 =  document.getElementById("day6");
let day7 = document.getElementById("day7")

const name = "berlin";
const apiKey = `7db45b5a58a7c1597b2bbae96008d4ad`;

let weekUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}&units=metric`;

getWeatherData = async () => {
  try {
    const res = await axios.get(weekUrl);
    // console.log(res.data.city);
    
    // console.log(res.data.list);
    
    getAvgTempWeather(res.data.list, res.data.city, res.data.list[0].weather[0]);
    console.log(res.data.list[0].weather[0].icon);
    
  } catch (error) {
    console.log(`${name} is very busy at the moment. Please try again later`);
  }
};

exports = getWeatherData


let myArray = new Array;

getAvgTempWeather = (weatherData, cityData, weatherIcon) => {
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

  const ic = weatherIcon.map(el =>{

  })
};

printOutWeather = dt => {
  console.log(`The temp for ${dt.date} is ${dt.temp / dt.cnt}`);
  myArray.push({cnt : dt.date},{temp: dt.temp / dt.cnt})
  
  
//   {date : dt.date},
//   {temp: dt.temp / dt.cnt}
// [dt.date,dt.temp / dt.cnt]
    
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

const elementGetData = async ()=>{
    let data = await myArray
    console.log(data['temp']);
    
    day2.innerHTML =`${data}`
    day3.innerHTML =`${myArray}`
    day4.innerHTML =`${myArray}`
    day5.innerHTML =`${myArray}`
    day6.innerHTML =`${myArray}`
    day7.innerHTML =`${myArray}`
}
elementGetData()
getWeatherData();