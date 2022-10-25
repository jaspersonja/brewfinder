var MapAPIKey = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search")
fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&per_page=5")
fetch("http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=redmond%2Cwa&wp.1=Issaquah%2Cwa&key=" + MapAPIKey)

function handleSearch(event) {
    event.preventDefault();

    var city = document.querySelector("#city-search").value;

    if (!city) {
        console.error("You need a city input value!");
        return;
    }
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&limit=5&appid="

location.assign(queryString);
}

searchButtonEl.addEventListener("submit", handleSearch);

function getApi() {
       
    fetch(queryURL)
        .then(function(response) {
        return response.json();
         })
         .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var breweryList = document.createElement("btn")
            breweryList.textContent = data[i].//searched variable
            citySearchHistory.appendChild(breweryList);

        }
            console.log(data);
         })
}
