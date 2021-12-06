
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather;
    var city = document.getElementById("city-input").value;
  console.log(city);
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
      var city = apiWeather.city;
 

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .fetchD1Forecast()
    .then(function(response) {
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[1].main;
      const description = data.weather[1].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[1].icon);
  

      // Modifier le DOM
      document.getElementById('D1-forecast-main').innerHTML = main;
      document.getElementById('D1-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('D1-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .fetchD2Forecast()
    .then(function(response) {
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[2].main;
      const description = data.weather[2].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[2].icon);
  

      // Modifier le DOM
      document.getElementById('D2-forecast-main').innerHTML = main;
      document.getElementById('D2-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('D2-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .fetchD3Forecast()
    .then(function(response) {
      console.log(response.data);

      // On récupère l'information principal
      const main = data.weather[3].main;
      const description = data.weather[3].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[3].icon);
  

      // Modifier le DOM
      document.getElementById('D3-forecast-main').innerHTML = main;
      document.getElementById('D3-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('D3-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
    
}
