"use strict"
class Calculadora {
    constructor(nombre) {
        this.nombre = nombre;
        this.currentScreenNumber = "";

        
    }

    mostrarEnPantalla(idPantalla) {
        document.getElementById(idPantalla).value = this.currentScreenNumber;
    }

    add(valor) {
        if(this.currentScreenNumber.length < 9) {
            this.currentScreenNumber += valor.toString();
        }
    }
}

var calculadora = new Calculadora("Calculadora Básica");