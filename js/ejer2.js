const nota = parseInt(prompt("Ingrese calificacion"));
if (nota >= 0 && nota <= 2){ 
    alert("Muy deficiente")
} else if (nota >= 3 && nota <= 4){
    alert("Insuficiente")
} else if (nota >= 5 && nota <= 6){
    alert("suficiente")
} else if (nota === 7){
    alert("Bien");
} else if (nota >= 8 && nota <= 9){
    alert("Notable")
} else if (nota === 10){
    alert("sobresaliente");
} else if (nota > 10){
   alert("Numero erroneo");
} else {
    alert("introduce un numero valido")
}