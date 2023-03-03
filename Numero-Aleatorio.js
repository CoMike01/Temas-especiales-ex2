// Definir una función que genera un número aleatorio entre dos valores
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Llamar a la función para generar un número aleatorio entre 1 y 10
var numeroAleatorio = generarNumeroAleatorio(1, 10);

// Mostrar el número aleatorio en la consola
console.log("El número aleatorio es: " + numeroAleatorio);
