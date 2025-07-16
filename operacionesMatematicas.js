import { PI } from './constantes.js';
import { IVA, DESCUENTO } from './constantes.js';


export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function areaCirculo(radio) {
  return PI * radio * radio;
}

//!Ejercicio 3

export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

export function aplicarImpuestos(total) {
  return total + (total * IVA);
}

export function aplicarDescuento(total) {
  return total - (total * DESCUENTO);
}
