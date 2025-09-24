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

  // Actualizar la lista visible
  actualizarLista();
}

// Actualizar lista
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente para evitar duplicados
  lista.innerHTML = "";

  // Recorrer el arreglo con bucle for y crear <li> por cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}