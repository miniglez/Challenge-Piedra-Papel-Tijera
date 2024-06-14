//Ver que boton pulsa el judador
//Un random 0 al 3 que cada numero es un valor que escoge la maquina
//Todos los condionales
//0 piedra
//1 papel
//2 Tijera

//if piedra ifelse papel else (tijera)
//Tu puntuacion
//Puntuacion maquina

//Funcion actualiza los contadores

const button1 = document.getElementsByClassName("boton-jugada")[0];
const button2 = document.getElementsByClassName("boton-jugada")[1];
const button3 = document.getElementsByClassName("boton-jugada")[2];
const resultados = document.getElementById("resultados");
const textContadorJugador = document.getElementById("contador-usuario")
const textContadorMaquina = document.getElementById("contador-ordenador")
let puntuacionJugador = 0;
let puntuacionMaquina = 0;


button1.addEventListener("click", function(){
    const resultadoMaquina = Math.floor(Math.random() * 3)
    if(resultadoMaquina === 0){
        resultados.innerHTML = "<p>Has sacado piedra y es un empate</p>"
    }
    else if (resultadoMaquina === 1){
        resultados.innerHTML = "<p>Has sacado piedra y la maquina ha sacado papel. Pierdes</p>"
        puntuacionMaquina += 1
    }
    else{
        resultados.innerHTML = "<p>Has sacado piedra y la maquina ha sacado tijera. Ganas</p>"
        puntuacionJugador += 1
    }
    ActualizarResultados()
})
button2.addEventListener("click", function(){
    const resultadoMaquina = Math.floor(Math.random() * 3)
    if(resultadoMaquina === 0){
        resultados.innerHTML = "<p>Has sacado papel y la maquina ha sacado piedra. Ganas</p>"
        puntuacionJugador +=1
    }
    else if (resultadoMaquina === 1){
        resultados.innerHTML = "<p>Has sacado papel empate</p>"
    }
    else{
        resultados.innerHTML = "<p>Has sacado papel y la maquina ha sacado tijera. Pierdes</p>"
        puntuacionMaquina += 1
    }
    ActualizarResultados()
})
button3.addEventListener("click", function(){
    const resultadoMaquina = Math.floor(Math.random() * 3)
    if(resultadoMaquina === 0){
        resultados.innerHTML = "<p>Has sacado tijera y la maquina ha sacado piedra. Pierdes</p>"
        puntuacionMaquina += 1
    }
    else if (resultadoMaquina === 1){
        resultados.innerHTML = "<p>Has sacado tijera y la maquina ha sacado papel. Ganas</p>"
        puntuacionJugador += 1
    }
    else{
        resultados.innerHTML = "<p>Has sacado tijera empate</p>"
    }
    ActualizarResultados()
})


function ActualizarResultados(){
    textContadorJugador.innerHTML = "<p>Tus puntos: " + puntuacionJugador + "</p>"
    textContadorMaquina.innerHTML = "<p>Puntos de la máquina: " + puntuacionMaquina + "</p>"
}