const cuadrado = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadradradoazar() {
  cuadrado.forEach((nombredeclase) => {
    nombredeclase.classList.remove("topo");
  });
  let posicionalazar = cuadrado[Math.floor(Math.random() * 9)];
  posicionalazar.classList.add("topo");
  
  posiciontopo = posicionalazar.id;
}

cuadrado.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === pociciontopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      pociciontopo = null;
    }
  });
});

function movertopo() {
  tiempotopo = setInterval(cuadradradoazar, 700);
}
movertopo();

function cuentaregresiva() 