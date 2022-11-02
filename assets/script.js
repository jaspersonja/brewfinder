var MapAPIKey = "Av5Fbku8ilvcyDQyVx6HKDgfQDxZLNbIa6wW02I16qHTK6lI6nSAGuxibjOTwe32"
var cityInput = document.querySelector("#city-search");
var searchButtonEl = document.querySelector("#city-search-btn");
var citySearchHistory = document.querySelector("#search-history");

var resultsEl = document.querySelector("#results")
fetch("https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&per_page=5");
fetch("http://dev.virtualearth.net/REST/V1/Routes/Driving?wp.0=redmond%2Cwa&wp.1=Issaquah%2Cwa&key=" + MapAPIKey);
let cityStorage = [];



function handleSearch(event) {
    event.preventDefault();
    var cityInputVal = document.querySelector("#city-search").value;

var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + cityInput.value + "&limit=5&appid=";
    if (!cityInput) {
        console.error("You need a city input value!");
        return;

    } 
    cityStorage.push(cityInputVal);
    console.log(cityInputVal);



    localStorage.setItem("results", JSON.stringify(cityStorage))
 
    renderButtons(); 
       console.log(cityStorage);
    getApi(queryURL);  
}

function loadDataFromLocalStorage() {
   var localStorageData = JSON.parse(localStorage.getItem("results"));
if (localStorageData) {
       cityStorage = localStorageData;
}


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
    citySearchHistory.innerHTML = ""; /// emptying order histories
    for (var i = 0; i < cityStorage.length; i++) {
        var searchHistory = document.createElement("button")
        citySearchHistory.appendChild(searchHistory);
        searchHistory.textContent = cityStorage[i];
        console.log("test")
    }
}
searchButtonEl.addEventListener("click", handleSearch);


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

// Map Function to Display Default Map
// key=AgD8bcWKAY7uUiODVrH_aXNAXGxwKYsGvySYcbKhk8nn_saT9XyOB7QtmNNJrMgL 

var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('lbm-map'),{
        credentials: 'AgD8bcWKAY7uUiODVrH_aXNAXGxwKYsGvySYcbKhk8nn_saT9XyOB7QtmNNJrMgL'
    });
    //Create Push Pin Icon
    var pushpin = new Microsoft.Maps.Map.Pushpin(map.getCenter(),{});
    map.entities.push(pushpin);
};

// Function to Show Search Results on Map (still working on this)
   function Search() {
      if(!handleSearch) {
            Microsoft.Maps.loadModule('Microsoft.Maps.Search', function(){
                handleSearch = new Microsoft.Maps.Search.handleSearch(map);
              Search()
            });
       } else {
            map.entities.clear();

            var searchQuery = searchButtonEl.value;
           geocodeQuery(searchQuery);
        }
   }
   function geocodeQuery(searchQuery) {
        var searchRequest = {
           where: searchQuery,
            callback: function (r) {
                if (r && r.results && r.results.length > 0) {
                   var pin, pins = [], locs = [], output = 'Results:<br/>';

                   for (var i = 0; i < r.results.length; i++) {
                      
                    pin = new Microsoft.Maps.Pushpin(r.results[i].location, {
                                                   text: i + ''
                       });
                      pins.push(pin);
                      locs.push(r.results[i].location);

                       output += i + ') ' + r.results[i].name + '<br/>';
                    }
                    map.entities.push(pins);
           }
       }
   }
   handleSearch.geocode(searchRequest);
};


