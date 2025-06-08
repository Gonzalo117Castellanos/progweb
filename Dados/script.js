let puntos1 = 0;
let puntos2 = 0;

function crearDadoHTML(id) {
  const dado = document.getElementById(id);
  dado.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const punto = document.createElement('div');
    punto.classList.add('punto');
    dado.appendChild(punto);
  }
}

function mostrarCaraDado(numero, id) {
  const posiciones = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };
  crearDadoHTML(id);
  const puntos = document.getElementById(id).children;
  posiciones[numero].forEach(i => puntos[i].classList.add('visible'));
}

function tirarDados() {
  let vueltas = 10;
  let resultado1 = 1;
  let resultado2 = 1;
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = "Tirando los dados... 🎲";

  let intervalo = setInterval(() => {
    resultado1 = Math.floor(Math.random() * 6) + 1;
    resultado2 = Math.floor(Math.random() * 6) + 1;
    mostrarCaraDado(resultado1, 'dado1');
    mostrarCaraDado(resultado2, 'dado2');
    vueltas--;
    if (vueltas === 0) {
      clearInterval(intervalo);
      evaluarGanador(resultado1, resultado2);
    }
  }, 100);
}

function evaluarGanador(d1, d2) {
  const resultadoDiv = document.getElementById('resultado');

  if (d1 > d2) {
    puntos1++;
    resultadoDiv.textContent = " ¡Jugador 1 gana esta ronda!";
  } else if (d2 > d1) {
    puntos2++;
    resultadoDiv.textContent = " ¡Jugador 2 gana esta ronda!";
  } else {
    resultadoDiv.textContent = "Empate, nadie gana esta vez.";
  }

  document.getElementById('puntos1').textContent = puntos1;
  document.getElementById('puntos2').textContent = puntos2;
}

function reiniciarJuego() {
  puntos1 = 0;
  puntos2 = 0;
  document.getElementById('puntos1').textContent = puntos1;
  document.getElementById('puntos2').textContent = puntos2;
  document.getElementById('resultado').textContent = "Juego reiniciado. ¡Tira los dados!";
  mostrarCaraDado(1, 'dado1');
  mostrarCaraDado(1, 'dado2');
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCaraDado(1, 'dado1');
  mostrarCaraDado(1, 'dado2');
  document.getElementById('resultado').textContent = "¡Tira los dados para comenzar!";
});
