"use strict";
class Calculadora {
  constructor(nombre) {
    this.nombre = nombre;
    this.currentScreenNumber = "";
    this.operator = "";
    this.val1 = "";
    this.memory = 0;

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;

        switch (keyName) {
        case "7":
            calculadora.add(7); calculadora.mostrarEnPantalla('screen');
            break;
        case "8":
            calculadora.add(8); calculadora.mostrarEnPantalla('screen');
            break;
        case "9":
            calculadora.add(9); calculadora.mostrarEnPantalla('screen');
            break;
        case "4":
            calculadora.add(4); calculadora.mostrarEnPantalla('screen');
            break;
        case "5":
            calculadora.add(5); calculadora.mostrarEnPantalla('screen');
            break;
        case "6":
            calculadora.add(6); calculadora.mostrarEnPantalla('screen');
            break;
        case "1":
            calculadora.add(1); calculadora.mostrarEnPantalla('screen');
            break;
        case "2":
            calculadora.add(2); calculadora.mostrarEnPantalla('screen');
            break;
        case "3":
            calculadora.add(3); calculadora.mostrarEnPantalla('screen');
            break;
        case "/":
            calculadora.operacion('/'); calculadora.mostrarEnPantalla('screen');
            break;
        case "*":
            calculadora.operacion('*'); calculadora.mostrarEnPantalla('screen');
            break;
        case "-":
            calculadora.operacion('-'); calculadora.mostrarEnPantalla('screen');
            break;
        case "+":
            calculadora.operacion('+'); calculadora.mostrarEnPantalla('screen');
            break;
        case ".":
            calculadora.addDecimal(); calculadora.mostrarEnPantalla('screen');
            break;
        case "c":
            calculadora.clear(); calculadora.mostrarEnPantalla('screen');
            break;
        case "Enter":
            calculadora.igual();
            break;
        }
    });
  }


  clear() {
    this.currentScreenNumber = "";
    this.operator = "";
    this.val1 = "";
    this.memory = 0;
  }

  addToMem() {
      if(this.currentScreenNumber.length > 0) {
        this.memory += Number(this.currentScreenNumber);
      }
  }

  substractFromMem() {
    if(this.currentScreenNumber.length > 0) {
        this.memory -= Number(this.currentScreenNumber);
      }
  }

  memToScreen() {
      this.currentScreenNumber = this.memory.toString();
  }

  mostrarEnPantalla(idPantalla) {
    document.getElementById(idPantalla).value = this.currentScreenNumber;
  }

  add(valor) {
    if (this.currentScreenNumber.length < 9) {
      this.currentScreenNumber += valor.toString();
    }
  }

  addDecimal() {
    if (!this.currentScreenNumber.includes(".")) {
      this.currentScreenNumber += ".";
    } else if (this.currentScreenNumber.length <= 0) {
        this.currentScreenNumber += "0.";
    }
  }

  operacion(operator) {
    if (this.val1.toString().length <= 0 && this.currentScreenNumber.length <= 0) { // Cuando pulsamos un operador sin haber introducido ninugn numero
      this.val1 = "0";
      this.currentScreenNumber = "";
      this.operator = operator;
    } else if (this.val1.toString().length <= 0 || (this.val1.toString().length > 0 && this.currentScreenNumber.length > 0)) { // Cuando aun no hemos almacenado nada en val1, ni hemos pulsado previamente el igual
      this.val1 = this.currentScreenNumber;
      this.currentScreenNumber = "";
      this.operator = operator;
    } else { // cuando ya tenemos un valor en val1 (resultado) y añadimos un operador sin que haya un numero en pantalla
      this.currentScreenNumber = "";
      this.operator = operator;
    }
  }

  igual() {
    if (this.operator.length > 0) {
        try {
        this.val1 = eval(
            Number(this.val1) + this.operator + Number(this.currentScreenNumber)
        );
        } catch (err) {
        this.val1 = "Error: " + err;
        }

        this.currentScreenNumber = "";
        this.operator = "";
    } else if (this.currentScreenNumber.length > 0) {
        try {
        this.val1 = eval(this.currentScreenNumber);
        } catch (Err) {
        this.val1 = "Error: " + Err;
        }
    }

    document.getElementById("screen").value = this.val1;
  }
}

var calculadora = new Calculadora("Calculadora Básica");
