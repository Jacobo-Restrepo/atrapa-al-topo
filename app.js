const cuadro = document.querySelectorAll(".cuadrado");
const tiempofaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoactual = tiempofaltante.textContent;

function cuadrodoazar(){
  cuadro.forEach((nombredeclase =>{
    nombredeclase.classList.remove("topo");
  });
  let posicionalazar = cuadro[Math.floor(Math.random()*9)]
  posicionalazar.classList.add("topo");

  posiciontopo=posicionalazar.id;
}
cuadro.forEach((identificador=>{
  identificador.addEventListener("click" ()=>{
    if (identificador.id===pociciontopo) {
      resultado= resultado + 1;
      puntaje.textContent=resultado;
      pociciontopo=null;
    }
  });
});

function movertopo (){
  tiempotopo =setInterval(cuadradradoazar,700);
}
movertopo();

function cuentaregresiva(){
  tiempoactual--;
  tiempofaltante.textContent=tiempoactual;
  if(tiempoactual===0);{
    clearInterval(idtiempo);
    clearInterval(timepotopo);
    alert ("Se acabó el tiempo, tu puntaje fue:" + resultado + "topos atrapados");
  }

}