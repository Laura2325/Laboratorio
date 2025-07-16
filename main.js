import { PI, IVA, DIAS_SEMANA } from './constantes.js';
import { sumar, restar, multiplicar, areaCirculo } from './operacionesMatematicas.js';  
import { calcularTotal, aplicarImpuestos, aplicarDescuento } from './operacionesMatematicas.js';
import { ROLES } from './usuariosConstantes.js';
import { crearUsuario } from './Usuarios.js';



//! Ejercicio1
const radio = 5;
const area = PI * radio ** 2;
console.log(`Área del círculo: ${area}`);

const precio = 100;
const precioConIVA = precio + (precio * IVA);
console.log(`Precio con IVA: ${precioConIVA}`);

console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);

//! Ejercicio2
console.log(sumar(3, 2));
console.log(restar(10, 7));
console.log(multiplicar(4, 5));
console.log(`Área usando función: ${areaCirculo(5)}`);

//! Ejercicio3
const subtotal = calcularTotal(100, 3);
console.log(`Subtotal: ${subtotal}`);

const conImpuestos = aplicarImpuestos(subtotal);
console.log(`Con impuestos: ${conImpuestos}`);

const conDescuento = aplicarDescuento(conImpuestos);
console.log(`Con descuento: ${conDescuento}`);

//! Ejercio4
const usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
const usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);

console.log(usuario1);
console.log(usuario2);