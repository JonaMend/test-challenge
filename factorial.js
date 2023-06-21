
// Define la función factorial recursiva
function factorial(n) {
    // Caso base: si n es igual a 0, devuelve 1
    if (n === 0) {
      return 1;
    } else {
      // Llamada recursiva: multiplica n por el factorial de (n - 1)
      return n * factorial(n - 1);
    }
  }
  
  // Exporta la función factorial para su uso en otros archivos
  module.exports = factorial;
  