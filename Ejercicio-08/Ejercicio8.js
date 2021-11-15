"use strict"
class Meteorologia {
    
    constructor() {
        this.apiKey = "55724aa16ce947504d703e6e639cea42";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.iconBaseUrl = "https://openweathermap.org/img/w/";
    }

    getUrlForCiudad(ciudad) {
        return this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apiKey;
    }

    cargarDatos(ciudad, element_ip){

        let url = this.getUrlForCiudad(ciudad);

        $.ajax({
            dataType: "json",
            url: url,
            method: 'GET',
            success: function(datos){
                    //Presentación de los datos contenidos en JSON
                    let icon= datos.weather[0].icon;

                    let stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                        stringDatos += "<li>País: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " ºC</li>";
                        stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºC</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $(element_ip).html(stringDatos);

                    $(element_ip).parent().find("img").attr("src",  "https://openweathermap.org/img/w/" + icon + ".png");
            },
            error:function(){
                $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
            }
        });

       
    }
}

let meteo = new Meteorologia();