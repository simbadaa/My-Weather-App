function displayWeather(response) {
    document.querySelector(".cityName").innerHTML = response.data.name;
    document.querySelector(".gradus").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector(".partlyCloudy").innerHTML = `Humidity: ${response.data.main.humidity}`;
    console.log(response.data);
  }
  
  function submit(event) {
    event.preventDefault();
    let city = document.querySelector(".textBlock").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63214c4281922e3bb72fdf12dada7734&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    weekTime.innerHTML = currentWeekDayAndTime;
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", submit);
  
  //Week Day and Time
  let date = new Date();
  let weekTime = document.querySelector(".weekTime");
  weekTime.addEventListener("submit", submit);
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let minutesHours = `${hours}:${minutes}`;
  
  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let week = date.getDay();
  let currentWeekDay = weekDay[week];
  let currentWeekDayAndTime = `${currentWeekDay} ${minutesHours}`;