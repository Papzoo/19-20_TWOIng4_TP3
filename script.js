
// Fonction appelée lors du click du bouton
function start() {
  city = document.getElementById('city-input').value;
  if(city==="")
    {
      city=undefined;
    }
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API

      const data = response.data;

      // On récupère l'information ajd
      const main_today = data.list[0].weather[0].main;
     
      const description_today = data.list[0].weather[0].description;
      const temp_today = data.list[0].temp.day;
      const icon_today = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

           // On récupère l'information demain
      const main_tomorrow = data.list[1].weather[0].main;
      const description_tomorrow = data.list[1].weather[0].description;
      const temp_tomorrow = data.list[1].temp.day;
      const icon_tomorrow = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

           // On récupère l'information 2j
      const main_after = data.list[2].weather[0].main;
      const description_after = data.list[2].weather[0].description;
      const temp_after = data.list[2].temp.day;
      const icon_after = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

           // On récupère l'information 3j
      const main_long = data.list[3].weather[0].main;
      const description_long = data.list[3].weather[0].description;
      const temp_long = data.list[3].temp.day;
      const icon_long = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main_today;
      document.getElementById('today-forecast-more-info').innerHTML = description_today;
      document.getElementById('icon-weather-container').innerHTML = icon_today;
      document.getElementById('today-forecast-temp').innerHTML = `${temp_today}°C`;
      // Modifier le DOM
     document.getElementById('tomorrow-forecast-main').innerHTML = main_tomorrow;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description_tomorrow;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon_tomorrow;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp_tomorrow}°C`;
      // Modifier le DOM
      
      document.getElementById('after-forecast-main').innerHTML = main_after;
      document.getElementById('after-forecast-more-info').innerHTML = description_after;
      document.getElementById('after-icon-weather-container').innerHTML = icon_after;
      document.getElementById('after-forecast-temp').innerHTML = `${temp_after}°C`;
      // Modifier le DOM
      document.getElementById('long-forecast-main').innerHTML = main_long;
      document.getElementById('long-forecast-more-info').innerHTML = description_long;
      document.getElementById('long-icon-weather-container').innerHTML = icon_long;
      document.getElementById('long-forecast-temp').innerHTML = `${temp_long}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
  
}

