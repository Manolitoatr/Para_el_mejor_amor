// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Sientate a mi lado y sientate un rato", time: 18 },
  { text: "Deja que nuestros corazones hagan su parte", time: 22 },
  { text: "Con vino y palabras para conocernos por horas", time: 28 },
  { text: "Así el dia nunca comienza", time: 34 },
  { text: "Por que eso es lo que quiero", time: 35 },
  { text: "Eso es lo que necesitamos", time: 41 },
  { text: "Eso es lo que somos", time: 46 },
  { text: "Eso es lo que necesitamos", time: 53 },
  { text: "Sientate a mi lado y quedate un rato", time: 77 },
  { text: "Aqui hay sombra", time: 84 },
  { text: "Hasta que seamos viejos y grises", time: 86 },
  { text: "Hasta que no tengamos nada que decir", time: 91 },
  { text: "Por que eso es lo que somos", time: 96 },
  { text: "Eso es lo que necesitamos", time: 101 },
  { text: "Eso es lo que somos", time: 106 },
  { text: "Eso es lo que necesitamos", time: 110 },
  { text: "Eso es lo que necesitamos", time: 121 },
  { text: "Por que eso es lo que somos", time: 125 },
  { text: "Eso es loq que necesitamos", time: 130 },
  { text: "Me acuesto muy profundo", time: 176 },
  { text: "En el tiempo de la noche", time: 180 },
  { text: "Me acuesto muy profundo", time: 191 },
  { text: "En el tiempo de la noche ", time: 198 },
  { text: "Quédate un rato", time: 203 },
  { text: "Y me acuesto", time: 213 },
  { text: "Puedes Hablar conmigo ahora", time: 217 },
  { text: "Quédate un rato", time: 225 },
  { text: "Sientate a mi lado y quedate un rato", time: 238 },
  { text: "Hasta que la noche acabe", time: 244 },
  { text: "Hasta que la mañana llegue y nos separe", time: 254 },
  { text: "Hasta el final de nuestros días", time: 255 },
  { text: "NO QUERIA QUE TE QUEDARAS SIN TUS FLORES AMARILLAS", time: 260 },
  { text: "Distrutalas", time: 265},
  { text: "TE AMO", time: 270 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);