"use strict";
class Pila {
  constructor() {
    this.lifo = new Array();
  }

  apilar(valor) {
    this.lifo.push(valor);
    console.log(valor);
  }

  desapilar() {
    return this.lifo.pop();
  }

  mostrar() {
    var stringPila = "";
    for (var i in this.lifo) {
      stringPila += i + ".\t" + this.lifo[i];
      stringPila += " \n";
    }
    return stringPila;
  }

  despejar() {
    this.lifo = new Array();
  }
}

("use strict");
class Calculadora {
  constructor(nombre) {
    this.pila = new Pila();
    this.nombre = nombre;
    this.currentScreenNumber = "";
  }

  añadir(valor) {
    if (this.currentScreenNumber.length < 9) {
      this.currentScreenNumber += valor.toString();
    }
  }

  mostrarPila() {
    return this.pila.mostrar();
  }
  mostrarInput() {
    return ">>>\t" + this.currentScreenNumber.toString();
  }

  clearInput() {
    this.currentScreenNumber = "";
  }

  mostrarPilaEnPantalla(screen) {
    document.getElementById(screen).value = calculadora.mostrarPila();
  }
  mostrarInputEnPantalla(screen) {
    document.getElementById(screen).value = calculadora.mostrarInput();
  }

  getValores() {
    let val1;
    let val2;

    if (this.currentScreenNumber.length > 0) {
      val1 = parseFloat(this.currentScreenNumber);
      val2 = this.pila.desapilar();
    } else {
      val1 = this.pila.desapilar();
      val2 = this.pila.desapilar();
    }

    // Devolvemos los dos valores
    return {
      val1,
      val2,
    };
  }

  getUnicoValor() {
    let val1;
    if (this.currentScreenNumber.length > 0) {
      val1 = parseFloat(this.currentScreenNumber);
    } else {
      val1 = this.pila.desapilar();
    }

    return val1;
  }

  sumar() {
    let { val1, val2 } = this.getValores();

    this.pila.apilar(val1 + val2);
    this.clearInput();
  }

  restar() {
    let { val1, val2 } = this.getValores();

    this.pila.apilar(val2 - val1);
    this.clearInput();
  }

  dividir() {
    let { val1, val2 } = this.getValores();

    this.pila.apilar(val2 / val1);
    this.clearInput();
  }

  multiplicar() {
    let { val1, val2 } = this.getValores();

    this.pila.apilar(val2 * val1);
    this.clearInput();
  }

  añadirDecimal() {
    if (this.currentScreenNumber.indexOf(".") == -1) {
      if (this.currentScreenNumber.length < 9) {
        this.currentScreenNumber += ".";
      }
    }
  }

  enter() {
    if (this.currentScreenNumber.length > 0) {
      if (
        this.currentScreenNumber.charAt(this.currentScreenNumber.length - 1) ==
        "."
      ) {
        this.currentScreenNumber += "0";
      }
      this.pila.apilar(parseFloat(this.currentScreenNumber));
      this.clearInput();
    }
  }

  borrar() {
    this.currentScreenNumber = "";
  }

  borrarTodo() {
    this.currentScreenNumber = "";
    this.pila.despejar();
  }

  coseno() {
    let val = this.getUnicoValor();
    this.pila.apilar(Math.cos(val));
    this.clearInput();
  }
  seno() {
    let val = this.getUnicoValor();
    this.pila.apilar(Math.sin(val));
    this.clearInput();
  }
  tangente() {
    let val = this.getUnicoValor();
    this.pila.apilar(Math.tan(val));
    this.clearInput();
  }

  arcocoseno() {
    let val = this.getUnicoValor();
    
    let result = Math.acos(val);
    if (!isNaN(result)) this.pila.apilar(result);

    this.clearInput();
  }

  arcoseno() {
    let val = this.getUnicoValor();

    let result = Math.asin(val);
    if (!isNaN(result)) this.pila.apilar(result);

    this.clearInput();
  }

  arcotangente() {
    let val = this.getUnicoValor();
    
    this.pila.apilar(Math.atan(val));
    this.clearInput();
  }
}

var calculadora = new Calculadora("Calculadora RPN");
