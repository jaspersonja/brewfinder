var MapAPIKey = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search")
var searchButtonEl = document.querySelector("#city-search-btn")
var citySearchHistory = document.querySelector("#search-history");

var resultsEl = document.querySelector("results")


fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&per_page=5")
fetch("http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=redmond%2Cwa&wp.1=Issaquah%2Cwa&key=" + MapAPIKey)
var cityStorage = []

function handleSearch(event) {
    event.preventDefault();
    var city = document.querySelector("#city-search").value;
    cityStorage.push(city);
    console.log(cityStorage);
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&limit=5&appid="
    if (!city) {
        console.error("You need a city input value!");
        return;
    }


    console.log(city)
    // getApi(queryURL);
    localStorage.setItem("results", JSON.stringify(cityStorage))
    console.log(cityStorage.length)
    renderButtons();
}

function loadDataFromLocalStorage() {
   var localStorageData = JSON.parse(localStorage.getItem("results"));

   cityStorage = localStorageData;

   renderButtons();

}


function getApi(queryURL) {

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (var i = 0; i < data.length; i++){
                console.log(data);
                console.log(data[i].name);
                var brewery = document.createElement('card');

                var breweryName = document.createElement('h2');
                breweryName.textContent = data[i].name;
                brewery.appendChild(breweryName);

                var breweryAddress = document.createElement('p');
                breweryAddress.textContent = (data[i].street + "; " + data[i].city + ", " + data[i].state + " " + data[i].postal_code);
                brewery.appendChild(breweryAddress);

                var breweryURL = document.createElement('a');
                breweryURL.textContent = data[i].website_url;
                brewery.appendChild(breweryURL);

                document.body.appendChild(brewery);


            }

        }); 

 }
loadDataFromLocalStorage();

function renderButtons() {
    let citySearchHistory = "0";
    citySearchHistory.innerHTML = ""; /// emptying order histories
    for (var i = 0; i < cityStorage.length; i++) {
        var searchHistory = document.createElement("button")
        citySearchHistory.appendChild(searchHistory);
        searchHistory.textContent = cityStorage[i];
        console.log("test")
    }
}
searchButtonEl.addEventListener("click", handleSearch);

function getApi(queryURL) {

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (var i = 0; i < data.length; i++){
                console.log(data);
                console.log(data[i].name);
                var brewery = document.createElement('card');

                var breweryName = document.createElement('h2');
                breweryName.textContent = data[i].name;
                brewery.appendChild(breweryName);

                var breweryAddress = document.createElement('p');
                breweryAddress.textContent = (data[i].street + "; " + data[i].city + ", " + data[i].state + " " + data[i].postal_code);
                brewery.appendChild(breweryAddress);

                var breweryURL = document.createElement('a');
                breweryURL.textContent = data[i].website_url;
                brewery.appendChild(breweryURL);

                document.body.appendChild(brewery);


            }

        }); 

 }
// window.onload = function() {
//     var container = document.getElementById('lbm-map'),
//       resize = function () { container.style.height = window.innerHeight + 'px'; };
//     resize();
  
//     var map = new Microsoft.Maps.Map(container, {
//       credentials: 'Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32',
//       center: new Microsoft.Maps.Location(39.554883, -99.052734),
//       mapTypeId: Microsoft.Maps.MapTypeId.road,
//       zoom: 4
//     });
  
//     window.onresize = function() {
//       resize()
//     };
//   };


