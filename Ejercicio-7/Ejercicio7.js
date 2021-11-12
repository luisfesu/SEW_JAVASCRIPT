"use strict"
class JQueryHelper {

    constructor() {}

    ocultar(ip) {
       $("#" + ip).hide();
    }

    mostrar(ip) {
        $("#" + ip).show();
    }


}

let jqHelper = new JQueryHelper();