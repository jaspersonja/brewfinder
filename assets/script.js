
var cityInput = document.querySelector("#city-search")
fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&per_page=3")