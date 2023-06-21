const { default: expect } = require('expect');
// Importa la función factorial
const factorial = require('../factorial');

// Describe el conjunto de pruebas para la función factorial
describe('factorial', () => {
  // Prueba: devuelve 1 cuando el número de entrada es 0
  test('returns 1 when input is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  // Prueba: devuelve el factorial de un número positivo
  test('returns the factorial of a positive number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
    expect(factorial(10)).toBe(3628800);
  });
});





