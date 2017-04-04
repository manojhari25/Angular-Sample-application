/**
 * Created by Manoj on 2/20/2017.
 */
var app = angular.module("myfirst", []);
app.controller("myFirst", function ($scope) {
    var cityname = $("#demo").val;
    var disp=document.getElementsByTagName("span");
    var url = "http://api.apixu.com/v1/current.json?key=2b3bc0a1ba7d46f285123113172701&q=" + cityname;
    console.log(url);
    var http = new XMLHttpRequest();
    http.open("GET", url, true);
    // http.send(null);
    http.onreadystatechange = function () {
        if (http.status == 200 && http.readyState == 4) {
            var data = JSON.parse(http.responseText);
            console.log(data);
            // poster.src=data.Poster;
            document.getElementById("temp").innerHTML =data.current.temp_c;
            disp[0].innerHTML = data.current.feelslike_c;
            disp[1].innerHTML = data.current.humidity;
            disp[2].innerHTML = data.current.temp_c;


        }
    }

})
