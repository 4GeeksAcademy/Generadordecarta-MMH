import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  muestraCartas()
document.getElementById("generar").addEventListener("click",muestraCartas);


};





function muestraCartas() {

  let cartasIconos = ['♦', '♠', '♥', '♣'];
  let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  let iconoAleatorio = cartasIconos[Math.floor(Math.random() * cartasIconos.length)];
  let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];


  const elementoIconoArriba = document.getElementById("icono-arriba");
  const elementoNumero = document.getElementById("numero");
  const elementoIconoAbajo = document.getElementById("icono-abajo");


  elementoIconoArriba.innerHTML = iconoAleatorio
  elementoNumero.innerHTML = numeroAleatorio
  elementoIconoAbajo.innerHTML = iconoAleatorio


  if (iconoAleatorio == '♦' || iconoAleatorio == '♥') {
    elementoIconoAbajo.style.color = "red";
    elementoIconoArriba.style.color = "red";

  } else {
    elementoIconoAbajo.style.color = "black";
    elementoIconoArriba.style.color = "black";

  }


};
