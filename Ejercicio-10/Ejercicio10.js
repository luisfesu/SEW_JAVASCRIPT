"use strict"
class GoldPrice {
    
    constructor() {
        this.baseUrl =  "https://www.goldapi.io/api/XAU/";
        this.urlStats = "https://www.goldapi.io/api/stat";
    }

    getUrlForCurrency(currency) {
        return this.baseUrl + currency;
    }
    
    getUrlForRestantes() {
        return this.urlStats;
    }

    llamadasRestantes(element_id) {

        let url = this.getUrlForRestantes();
        
        

        $.ajax({
            dataType: "json",
            url : url,
            method: "GET",
            headers: { // Necesario para acceder a gold-api.io
                "x-access-token" : "goldapi-33nbltkw0xvkoa-io"
            },
            
            success: function(datos) {
                $(element_id).find("h2").append(datos.requests_month + " / 500")
            },
        });

    }

    cargarDatos(element_id, currency) {

        let url = this.getUrlForCurrency(currency);
        $.ajax({
            dataType: "json",
            url : url,
            method: "GET",
            timeout: 0,
            headers: { // Necesario para acceder a gold-api.io
                "x-access-token" : "goldapi-33nbltkw0xvkoa-io",
                "Content-Type" : "application/json"
            },

            success: function(datos) {

                let title = datos.metal + datos.currency;
                let subtitle = "Oro" + " / " + datos.currency;
                let price = datos.price;

                if(parseFloat(price) < parseFloat(datos.prev_close_price)) {
                    $(element_id).find("article").find("h4").css("background-color", "#a10808");
                }

                let ch = datos.ch;
                if(parseFloat(ch) < 0) {
                    ch = "-" + ch;
                    $(element_id).find("article").find("p").css("background-color", "#a10808");
                } else {
                    ch = "+" + ch;
                }

                let chp = datos.chp;
                if(parseFloat(chp) < 0) {
                    chp = "-" + chp;
                    $(element_id).find("article").find("p").css("background-color", "#a10808");
                } else {
                    chp = "+" + chp;
                }

                $(element_id).find("h2").html(title);
                $(element_id).find("article").find("h3").html(subtitle);
                $(element_id).find("article").find("h4").html(price);
                $(element_id).find("article").find("p").html(chp + " (" + ch + ")");
            }
        });
    }
}

let goldPrice = new GoldPrice();