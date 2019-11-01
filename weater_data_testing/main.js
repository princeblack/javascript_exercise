// const axios = require('axios')
// const url=`http://api.openweathermap.org/data/2.5/weather?q=BERLIN&APPID=7db45b5a58a7c1597b2bbae96008d4ad&units=metric`;

let city = "berlin";

$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7db45b5a58a7c1597b2bbae96008d4ad&units=metric`,function (data) {
    console.log(data);

    let icon =`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let temp =Math.floor(data.main.temp);
    let weather = data.weather[0].main;
    $('.icon').attr('src', icon)
    $('.temp').append(temp)
    $('.weather').append(weather)


})

