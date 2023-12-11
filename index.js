function displayWeather(response) {
    document.querySelector(".cityName").innerHTML = response.data.name;
    document.querySelector(".gradus").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector(".partlyCloudy").innerHTML = `Humidity: ${response.data.main.humidity}`;
    document.querySelector(".windSpeed").innerHTML = response.data.wind.speed;
    document.querySelector(".weatherdesc").innerHTML = response.data.weather[0].description;
    console.log(response.data.weather[0].description)
    console.log(response);
  }
  
  function submit(event) {
    event.preventDefault();
    let city = document.querySelector(".textBlock").value;

    if (city === "") {
        alert("Please type a city name, not country");
        return; // Exit the function if the city is empty
      } else {
        // Check if cityName is present in the countries array
        let countryMatch = countries.find(country => country.name.toLowerCase() === city.toLowerCase());
      
        if (countryMatch) {
          alert("Please type a city name, not country");
          preventDefault();
        }
      }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63214c4281922e3bb72fdf12dada7734&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    weekTime.innerHTML = currentWeekDayAndTime;
  }

  let countries = [
    { name: "Afghanistan" },
    { name: "Albania" },
    { name: "Algeria" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Antigua and Barbuda" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaijan" },
    { name: "Bahamas" },
    { name: "Bahrain" },
    { name: "Bangladesh" },
    { name: "Barbados" },
    { name: "Belarus" },
    { name: "Belgium" },
    { name: "Belize" },
    { name: "Benin" },
    { name: "Bhutan" },
    { name: "Bolivia" },
    { name: "Bosnia and Herzegovina" },
    { name: "Botswana" },
    { name: "Brazil" },
    { name: "Brunei" },
    { name: "Bulgaria" },
    { name: "Burkina Faso" },
    { name: "Burundi" },
    { name: "Cote d'Ivoire" },
    { name: "Cabo Verde" },
    { name: "Cambodia" },
    { name: "Cameroon" },
    { name: "Canada" },
    { name: "Central African Republic" },
    { name: "Chad" },
    { name: "Chile" },
    { name: "China" },
    { name: "Colombia" },
    { name: "Comoros" },
    { name: "Congo" },
    { name: "Costa Rica" },
    { name: "Croatia" },
    { name: "Cuba" },
    { name: "Cyprus" },
    { name: "Czechia" },
    { name: "Czechia Republic" },
    { name: "Democratic Republic of the Congo" },
    { name: "Denmark" },
    { name: "Djibouti" },
    { name: "Dominica" },
    { name: "Dominican Republic	" },
    { name: "Ecuador" },
    { name: "Egypt" },
    { name: "El Salvador" },
    { name: "Equatorial Guinea" },
    { name: "Eritrea" },
    { name: "Estonia" },
    { name: "Eswatini" },
    { name: "Ethiopia" },
    { name: "Fiji" },
    { name: "Finland" },
    { name: "France" },
    { name: "Gabon" },
    { name: "Gambia" },
    { name: "Georgia" },
    { name: "Germany" },
    { name: "Ghana" },
    { name: "Greece" },
    { name: "Grenada" },
    { name: "Guatemala" },
    { name: "Guinea" },
    { name: "Guinea-Bissau" },
    { name: "Guyana" },
    { name: "Haiti" },
    { name: "Holy See" },
    { name: "Honduras" },
    { name: "Hungary" },
    { name: "Iceland" },
    { name: "India" },
    { name: "Indonesia" },
    { name: "Iran" },
    { name: "Iraq" },
    { name: "Ireland" },
    { name: "Israel" },
    { name: "Italy" },
    { name: "Jamaica" },
    { name: "Japan" },
    { name: "Jordan" },
    { name: "Kazakhstan" },
    { name: "Kenya" },
    { name: "Kiribati" },
    { name: "Kuwait" },
    { name: "Kyrgyzstan" },
    { name: "Laos" },
    { name: "Latvia" },
    { name: "Lebanon" },
    { name: "Lesotho" },
    { name: "Liberia" },
    { name: "Libya" },
    { name: "Liechtenstein" },
    { name: "Lithuania" },
    { name: "Luxembourg" },
    { name: "Madagascar" },
    { name: "Malawi" },
    { name: "Malaysia" },
    { name: "Maldives" },
    { name: "Mali" },
    { name: "Malta" },
    { name: "Marshall Islands" },
    { name: "Mauritania" },
    { name: "Mauritius" },
    { name: "Mexico" },
    { name: "Micronesia" },
    { name: "Moldova" },
    { name: "Monaco" },
    { name: "Mongolia" },
    { name: "Montenegro" },
    { name: "Morocco" },
    { name: "Mozambique" },
    { name: "Myanmar" },
    { name: "Namibia" },
    { name: "Nauru" },
    { name: "Nepal" },
    { name: "Netherlands" },
    { name: "New Zealand" },
    { name: "Nicaragua" },
    { name: "Niger" },
    { name: "Nigeria" },
    { name: "North Korea" },
    { name: "North Macedonia" },
    { name: "Norway" },
    { name: "Oman" },
    { name: "Pakistan" },
    { name: "Palau" },
    { name: "Palestine State" },
    { name: "Panama" },
    { name: "Papua New Guinea" },
    { name: "Paraguay" },
    { name: "Peru" },
    { name: "Philippines" },
    { name: "Poland" },
    { name: "Portugal" },
    { name: "Qatar" },
    { name: "Romania" },
    { name: "Russia" },
    { name: "Rwanda" },
    { name: "Saint Kitts and Nevis" },
    { name: "Saint Lucia" },
    { name: "Saint Vincent and the Grenadines" },
    { name: "Samoa" },
    { name: "San Marino" },
    { name: "Sao Tome and Principe" },
    { name: "Saudi Arabia" },
    { name: "Senegal" },
    { name: "Serbia" },
    { name: "Seychelles" },
    { name: "Sierra Leone" },
    { name: "Singapore" },
    { name: "Slovakia" },
    { name: "Slovenia" },
    { name: "Solomon Islands" },
    { name: "Somalia" },
    { name: "South Africa" },
    { name: "South Korea" },
    { name: "South Sudan" },
    { name: "Spain" },
    { name: "Sri Lanka" },
    { name: "Sudan" },
    { name: "Suriname" },
    { name: "Sweden" },
    { name: "Switzerland" },
    { name: "Syria" },
    { name: "Tajikistan" },
    { name: "Tanzania" },
    { name: "Thailand" },
    { name: "Timor-Leste" },
    { name: "Togo" },
    { name: "Tonga" },
    { name: "Trinidad and Tobago" },
    { name: "Tunisia" },
    { name: "Turkey" },
    { name: "Turkmenistan" },
    { name: "Tuvalu" },
    { name: "Uganda" },
    { name: "Ukraine" },
    { name: "United Arab Emirates" },
    { name: "United Kingdom" },
    { name: "United States of America" },
    { name: "USA" },
    { name: "Uruguay" },
    { name: "Uzbekistan" },
    { name: "Vanuatu" },
    { name: "Venezuela" },
    { name: "Vietnam" },
    { name: "Yemen" },
    { name: "Zambia" },
    { name: "Zimbabwe" }
  ];
  
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


