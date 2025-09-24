# 🎁 Challenge Amigo Secreto — ONE-ALURA-G9

Repositorio del programa **Oracle Next Education (ONE) – Alura LATAM** - Grupo 9.  

---

## 📌 Descripción

Aplicación simple en la que el usuario ingresa nombres de amigos, estos se agregan a una lista visible y luego se puede **sortear** un nombre al azar para conocer al **“amigo secreto”**.

---

## ✨ Funcionalidades

- **Agregar nombres** mediante un campo de texto y botón **“Adicionar”**.  
- **Validar** que no se ingresen nombres vacíos (alerta: “Por favor, inserte un nombre.”).  
- **Mostrar la lista** de nombres agregados (se limpia y renderiza en cada adición).  
- **Sortear** un nombre de forma **aleatoria** y mostrar el resultado en pantalla.

---

## 🧠 Conocimientos Adquiridos

- Lógica de programación: sumérgete en la programación con JavaScript
- Lógica de programación: explorar funciones y listas
- Git y GitHub: repositorio, commit y versiones

---

## 🛠️ Tecnologías Utilizadas

- **HTML**  
- **CSS**  
- **JavaScript**

---

## 🗂️ Estructura del Proyecto

├── index.html
├── style.css
├── app.js
└── assets/
├── amigo-secreto.png
└── play_circle_outline.png

---

## 🚀 Cómo Ejecutar

1. Clona el repositorio o descarga el ZIP.  
2. Abre `index.html` en tu navegador.  
3. Escribe nombres y presiona **“Adicionar”**.  
4. Presiona **“Sortear Amigo”** para ver el resultado.  

> No necesitas dependencias ni servidor: es una app 100% estática.

---

## 🧪 Pruebas Manuales Sugeridas

- Intentar agregar con el campo vacío, ahí debe aparecer la alerta.  
- Agregar varios nombres y confirmar que todos aparecen en la lista.  
- Ejecutar el sorteo varias veces y verificar que el resultado varía.  

---

## 📜 Historial de Cambios (Commits)

1. **Creación del Repositorio Base**  
   - Inicialización del proyecto y estructura mínima.

2. **Función Almacenar Nombres**  
   - Se declara el arreglo global `amigos` para almacenar nombres.

3. **Función Agregar Amigos**  
   - Se implementa `agregarAmigo()` con validación,  
     inserción en `amigos` y limpieza del campo.

4. **Función Actualizar Lista de Amigos**  
   - Se implementa `actualizarLista()` con limpieza previa `innerHTML = ""` y render de `<li>` con **bucle `for`**.  
   - Se invoca desde `agregarAmigo()` tras cada inserción.

5. **Función Sortear Amigos**  
   - Se implementa `sortearAmigo()` con validación de arreglo vacío, índice aleatorio con  
     `Math.random()` + `Math.floor()` y resultado en `innerHTML`.

6. **Actualización Final (Index - Style - README)**  
   - Ajustes de accesibilidad y mejoras de UI.  
   - README consolidado con contexto del programa y guía completa.

---

## 👤 Autor

**Juan Diego Carranza Jacinto**  
- LinkedIn: https://www.linkedin.com/in/juan-diego-carranza-jacinto-a78023329/  
- GitHub: https://github.com/JuanDiegoCJ

---

## 🏫 Programa

**Oracle Next Education (ONE) – Alura LATAM**  

---

## 🙌 Créditos

Challenge inspirado en **Alura LATAM / ONE**.  
Íconos e imágenes con fines educativos.

---

## 📄 Licencia

Uso educativo.

---

## ⭐ ¿Te gustó el proyecto?

Si te ha servido, ¡deja una ⭐ en el repositorio! 😎