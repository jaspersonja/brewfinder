var MapAPIKey = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search")
var searchButtonEl = document.querySelector("#city-search-btn")
var citySearchHistory = document.querySelector("ul");
var resultsEl = document.querySelector("#results")
fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&per_page=5")
fetch("http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=redmond%2Cwa&wp.1=Issaquah%2Cwa&key=" + MapAPIKey)


function handleSearch(event) {
    event.preventDefault();
    var city = document.querySelector("#city-search").value;
var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&limit=5&appid="
    if (!city) {
        console.error("You need a city input value!");
        return;
    }
console.log("hi")
    getApi(queryURL);
    localStorage.setItem("results", citySearchHistory)
}

searchButtonEl.addEventListener("click", handleSearch);

function getApi(queryURL) {

    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var breweryList = document.createElement("btn")
                breweryList.textContent = data[i].city
                console.log(breweryList);
                citySearchHistory.appendChild(breweryList);

            }
            console.log(data);
        })
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

