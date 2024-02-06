let resultado = ""
do {
    let cadena = prompt("Introduce una cadena de texto");
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("desea continuar"));
document.write(resultado)