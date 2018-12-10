var app = angular.module('weatherApp', ['chart.js']);

app.value("baseUrl", "http://api.openweathermap.org/data/2.5/");

app.value("apiKey", "2a317561b3e6f125cfb2ef52172a5ac0");

app.value("cities", [
    {name: "Warsaw"},
    {name: "Wroclaw"},
    {name: "Munich"},
    {name: "Sydney"},
    {name: "Amsterdam"}
 ]
);

app.factory('DownloadData', function ($http, $q) {
    return {
        getData: function(dataUrl) {
            return $http.get(dataUrl)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }
    };
});

app.service('CurrentWeather', function (DownloadData, baseUrl, apiKey) {
    this.weather = function (city) {
        var myWeather = DownloadData.getData(
            baseUrl
            + "weather?q="
            + city
            + '&APPID='
            + apiKey
        )
        .then(function(weatherData){
            var temp = weatherData.main.temp-273.15;
            var windSpeed = weatherData.wind.speed;
            return {
                temp: temp,
                wind: windSpeed
            };
        });
        return myWeather;
    }
});

app.service('ForecastWeather', function (DownloadData, baseUrl, apiKey) {
    this.weather = function (city) {
        var myWeather = DownloadData.getData(
                baseUrl
                + "forecast?q="
                + city
                + '&APPID='
                + apiKey
            )
            .then(function(weatherData){
                var list = weatherData.list;
                var myAnswer = {};
                for (var i = 0; i < list.length; i++) {
                    myAnswer[i] = {
                        temp: list[i].main.temp-273.15,
                        wind: list[i].wind.speed,
                        date: list[i].dt_txt
                    };
                };
                return myAnswer;
            });
        return myWeather;
    }
});

app.config(['ChartJsProvider', function (ChartJsProvider) {
    ChartJsProvider.setOptions({
        colours: ['#cb4b16', '#c69e23']
    });
}])

app.controller('weatherCtrl', ['$scope', '$http', 'cities', 'CurrentWeather', 'ForecastWeather', function ($scope, $http, cities, CurrentWeather, ForecastWeather) {

    $scope.cities = cities;
    $scope.showTip = false;
    $scope.hideTip = function () {
        $scope.showTip = true;
    };

    $scope.hideTable = true;
    $scope.showTable = function () {
        $scope.hideTable = false;
    };

    $scope.toggleObject = {item: -1};

    angular.forEach( $scope.cities, function(city, key) {
        CurrentWeather.weather(city.name)
        .then(function(myWeather) {
            city.temp = myWeather.temp;
            city.wind = myWeather.wind;
        });
    });

    $scope.forecastWeather;
    $scope.forecastTemp = [];
    $scope.forecastWind = [];
    $scope.forecastDate = [];

    $scope.getForecast = function (city) {
        $scope.forecastWeather = ForecastWeather.weather(city)
        .then(function(myWeather) {
            $scope.forecastWeather = myWeather;

            for (var i=0; i < Object.keys(myWeather).length; i++) {
                $scope.forecastTemp[i] = myWeather[i].temp.toFixed(1);
                $scope.forecastWind[i] = myWeather[i].wind.toFixed(1);
                $scope.forecastDate[i] = myWeather[i].date;
            }
        });
    };

    $scope.labels = $scope.forecastDate;
    $scope.series = ['Temperature [°C]', 'Wind [m/s]'];
    $scope.data = [
        $scope.forecastTemp,
        $scope.forecastWind
    ];

}]);