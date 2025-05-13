
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Me gustaría conocerte').split('');
const titleElement = document.getElementById('title');
let index = 0;

function appendTitle() {
  if (index < titles.length) {
    titleElement.innerHTML += titles[index];
    index++;
    setTimeout(appendTitle, 300); // 1000ms delay
  }
}

// Crear un nuevo elemento de texto adicional
const additionalText = document.createElement("span");
additionalText.innerHTML = "La verdad me llamaste la atencion hace un tiempo y me preguntaba como eras, por lo que me gustaria";
additionalText.style.position = "absolute";
additionalText.style.top = "0";
additionalText.style.left = "100%";  // Esto lo coloca a la derecha
additionalText.style.color = "#fff";  // Cambia el color si es necesario
additionalText.style.fontSize = "20px";  // Cambia el tamaño del texto

// Añadir el texto adicional al mismo contenedor
titleElement.appendChild(additionalText);

appendTitle();

    clearTimeout(c);
  }, 1000);
};