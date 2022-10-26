
var key = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search")
fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&per_page=3")

fetch('https://dev.virtualearth.net/REST/v1/LocalSearch/?query=coffee&userLocation=47.602038,-122.333964&key=' + key), {

method: 'GET', //GET is the default.
credentials: 'same-origin', // include, *same-origin, omit
redirect: 'follow', // manual, *follow, error
}