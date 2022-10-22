// Importar una libreria en NodeJS
const axios = require("axios");

let apiKey = "4c5d2f33b2023f9f2dd1458e094bb341";
let city = "Bogota, col";       // ISO 3166

let requestConfig = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey,
}

let objPromesa = axios(requestConfig); // Objeto tipo promesa para controlar peticiones web
objPromesa
    .then(function (response) {
        console.log("La temperatura en Bogotá, Colombia es de: " + (response.data.main.temp - 273.5).toFixed(2) + " grados celcius.");     
        //response.data =  muestra todos los datos del clima y se revisa en la documentacion de la API lo que se quiera mostrar.
    })
    .catch(function (err) {
        console.log(err);
    });