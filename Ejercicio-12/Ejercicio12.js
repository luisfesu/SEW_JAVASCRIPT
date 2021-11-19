"use strict";
class AdministradorArchivos {
    constructor() {
    }

    soportaAPIFile() {
        return (window.File && window.FileReader && window.FileList && window.Blob)? true : false;
    }

    cargarArchivos(element_id) {

        if(this.soportaAPIFile()) {
            
            this.mostrarArchivos(element_id);

        } else {
            document.getElementById(element_id).innerHTML += "<p>API Files no soportada</p>";
        }
    }

    mostrarContenidoArchivo(archivo, element_id) {
        let lector = new FileReader();

        lector.onload = function(evento) {

            document.getElementById(element_id).innerText += `<p> ${ lector.result } </p>`;
        };

        lector.readAsText(archivo);
    }

    mostrarContenidoArchivoFormateado(archivo, element_id) {
        let lector = new FileReader();

        lector.onload = function(evento) {

            document.getElementById(element_id).innerHTML += `<pre> ${ lector.result } </pre>`;
        };

        lector.readAsText(archivo);
    }

    mostrarArchivos(element_id) {
        let archivos = document.getElementById("uploadFiles").files;
        let nArchivos = archivos.length;

        for (let i = 0; i < nArchivos; i++) {

            // Encapsulamos los archivos en elementos Article
            document.getElementById(element_id).innerHTML += "<article>";

            let archivo = archivos[i];

            let infoArchivo = `<p> <strong>Nombre = </strong> ${ archivo.name }, <strong>tamaño</strong> = ${ archivo.size }, <strong>Tipo = </strong> ${ archivo.type }</p>`
            document.getElementById(element_id).innerHTML += infoArchivo;

            if(archivo.type.match("text/plain")) {
                this.mostrarContenidoArchivo(archivo, element_id);
            } else if(archivo.type.match("text/xml") || archivo.type.match("application/json")) {
                this.mostrarContenidoArchivoFormateado(archivo, element_id);
            }

            // Cerramos la encapsulacion
            document.getElementById(element_id).innerHTML += "</article>";
        }

        
    }
}

let archivos = new AdministradorArchivos();