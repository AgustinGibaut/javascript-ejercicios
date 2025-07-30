/*

Crea 3 variables numero1,numero2 y resultado.
Pidele al usuario que ingrese los valores de las variables numero1 y numero2 mediante un prompt().
Asigna a la variable resultado el valor de la suma entre numero1 y numero2.
Muestra un alerta con el mensaje “El resultado es: (resultado)”.



*/

//creo variable del numero 1
let numero1 = Number ( prompt ("ingrese el primer numero porvafor"))
let numero2 = Number ( prompt ("ingrese el segundo numero porvafor"))

//la variable resultado me daria la sumatora entre la variable numero1, numero2
let resultado = numero1 + numero2;

//muestra el resultado por alerta
prompt(`el resultado de la suma es: ${resultado}`)