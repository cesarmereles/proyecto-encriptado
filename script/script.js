const campoTexto = document.querySelector(".campo-texto");
const campoPantalla = document.querySelector(".campo-pantalla");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const mensaje = "";

const matriz = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

//*MODIFICANDO FUNCION
btnEncriptar.addEventListener("click", () => {
  const texto = campoTexto.value.toLowerCase();
  if (texto.length === 0 || texto.trim() === "" || !isNaN(texto)) {
    alert("Debe ingresar un texto");
    campoTexto.value = "";
    return false;
  } else {
    campoPantalla.value = Encriptador(texto);
    campoTexto.value = "";
    btnEncriptar.setAttribute("disabled", "true");
    btnDesencriptar.removeAttribute("disabled");
  }
});

function Encriptador(frase) {
  for (let x = 0; x < matriz.length; x++) {
    if (frase.includes(matriz[x][0])) {
      frase = frase.replaceAll(matriz[x][0], matriz[x][1]);
    }
  }
  return frase;
}

btnDesencriptar.addEventListener("click", () => {
  const pantallaD = Desencriptador(campoPantalla.value);
  campoTexto.value = pantallaD;
  campoPantalla.value = "";
  btnEncriptar.removeAttribute("disabled");
  btnDesencriptar.setAttribute("disabled", "true");
});

function Desencriptador(fraseEncriptada) {
  for (let x = 0; x < matriz.length; x++) {
    if (fraseEncriptada.includes(matriz[x][1])) {
      fraseEncriptada = fraseEncriptada.replaceAll(matriz[x][1], matriz[x][0]);
    }
  }
  return fraseEncriptada;
}

// function soloLetras(frase) {
//   let letrasAceptadas = "a-zñáéíóú";
//   //let expresionRegular = "[!@#$%^&*()\\[]{}-_+=|:/]";
//   let expresionRegular = "^[!@#$%^&*()\\[]{}-_+=|]+$";

//   if (letrasAceptadas.match(expresionRegular) != null) {
//     return false;
//   } else {
//     return frase;
//   }
// }
