// Array global para almacenar los nombres
let amigos = [];

// Implementación de agregarAmigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación del nombre
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al arreglo
  amigos.push(nombre);

  // Limpiar el campo
  input.value = "";

}