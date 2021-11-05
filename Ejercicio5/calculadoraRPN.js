"use strict"
class Pila {
    constructor() {
        this.lifo = new Array();
    }

    apilar(valor) {
        this.lifo.push(valor);
        console.log(valor);
    }

    desapilar() {
        return (this.lifo.pop());
    }

    mostrar() {
        var stringPila = "";
        for (var i in this.lifo){
            stringPila += i +".\t" + this.lifo[i];
            stringPila +=  " \n";
        }
        return stringPila;
    }

    
}

"use strict"
class Calculadora {
    constructor(nombre) {
        this.pila = new Pila();
        this.nombre = nombre;
    }
    
    añadir(valor) {
        this.pila.apilar(valor);
    }

    mostrarPila() {
        return this.pila.mostrar();
    }
    sumar() {
        let val1 = this.pila.desapilar();
        let val2 = this.pila.desapilar();
        this.pila.apilar(val1 + val2);
    }

    restar() {
        let val1 = this.pila.desapilar();
        let val2 = this.pila.desapilar();
        this.pila.apilar(val1 - val2);
    }
}

var calculadora = new Calculadora('Calculadora RPN');
