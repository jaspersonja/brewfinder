var MapAPIKey = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search")
var searchButtonEl = document.querySelector("#city-search-btn")
var citySearchHistory = document.querySelector("#search-history");
var resultsEl = document.querySelector("results")
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
            // for (var i = 0; i < data.length; i++) {
            //     var breweryList = document.createElement("li")
            //     breweryList.textContent = data[i].city
            //     console.log(breweryList);
            //     citySearchHistory.appendChild(breweryList);
            // }
            // console.log(data[0].name);
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



                // brewery.textContent = data[i].name;
                // citySearchHistory.appendChild(breweryList);
                // breweryList.textcontent = data[i].city;
                // citySearchHistory.appendChild(breweryList);

            }
            // document.getElementById("results1").innerHTML = data[0].name;
            // const myJSON = JSON.stringify(data);
            // console.log(myJSON);
            // localStorage.setItem("results", myJSON);
            // let text = localStorage.getItem("results");
            // let obj = JSON.parse(text);
            // document.getElementById("results").innerHTML = obj.name;
        }); 

 }

