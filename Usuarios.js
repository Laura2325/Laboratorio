export function crearUsuario(nombre, rol) {
  return {
    nombre,
    rol,
    fechaRegistro: new Date().toLocaleDateString("es-CO")
  };
}
