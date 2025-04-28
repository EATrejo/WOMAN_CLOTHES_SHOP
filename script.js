let menu = document.getElementById("link");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");
let color = document.getElementById("navbar");
let icon = document.getElementById("icon");

function openmenu() {
  menu.style.top = "25%";
  menu.style.background = "url('./images/charlie.webp')";
  menu.style.background = "size: cover"; /* Escala la imagen para cubrir todo el contenedor */
  menu.style.background = "position: center"; /* Centra la imagen */
  menu.style.background = "repeat: no-repeat"; /* Evita que la imagen se repita */
  menu.style.margin = "0px"; /* Evita que la imagen se repita */
  menu.style.padding = "50px"; /* Evita que la imagen se repita */
  menu.style.border = "1px solid black"; /* Estilo del borde (marco) */


  open.style.display = "none";
  close.style.display = "inline-block";
  color.style.transition = "1s";

  // Agregar eventos de clic a los enlaces del menú
  let links = menu.querySelectorAll("a"); // Suponiendo que los enlaces son etiquetas <a>
  links.forEach(link => {
  link.addEventListener("click", closemenu); // Cerrar menú al hacer clic en un enlace
  });
  
}

function closemenu() {
  menu.style.top = "-100%";
  menu.style.background = "transparent";
  open.style.display = "inline-block";
  close.style.display = "none";
  icon.style.color = "#eee";
}
var scrollTrigger = 100;
let nav = document.getElementById("navbar");

// =================SCROLLING BOTTOM TO TOP

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls dowm 20px from the top of the document show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "inblock";
  } else {
    mybutton.style.display = "inblock";
  }
}

// When the user clicks on the button, scroll to the top of the ddocument
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
