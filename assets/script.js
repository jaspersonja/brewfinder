var MapAPIKey = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search")
var searchButtonEl = document.querySelector("#city-search-btn")
var citySearchHistory = document.querySelector("#search-history");
var resultsEl = document.querySelector("#results")
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

// function getApi(queryURL) {

    // fetch(queryURL)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     // .then(function (data) {
    //     //     for (var i = 0; i < data.length; i++) {
    //     //         var breweryList = document.createElement("btn")
    //     //         breweryList.textContent = data[i].city
    //     //         console.log(breweryList);
    //     //         citySearchHistory.appendChild(breweryList);

    //         }
    //         console.log(data);
//         })
// }


