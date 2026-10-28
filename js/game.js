let world;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);
  console.log("MyCharecter is", world.character);
}

// // 1. Spritesheet laden
// const spriteSheet = new Image();
// spriteSheet.src = "deine_matrix.png"; // Deine 4x4 Matrix

// // Dimensionen deiner Kacheln (Beispiel: Wenn die Matrix 256x256 ist, ist eine Kachel 64x64)
// const tileWidth = 64;
// const tileHeight = 64;

// // Funktion, um ein bestimmtes Bild aus der 4x4 Matrix zu zeichnen
// function drawSprite(spriteIndex, canvasX, canvasY) {
//   // spriteIndex ist eine Zahl von 0 bis 15 (für die 16 Bilder)

//   // Berechnen, in welcher Spalte und Zeile der Index liegt
//   const col = spriteIndex % 4; // Spalte (0, 1, 2 oder 3)
//   const row = Math.floor(spriteIndex / 4); // Zeile (0, 1, 2 oder 3)

//   // Die exakten Pixel-Koordinaten auf dem Spritesheet berechnen
//   const sourceX = col * tileWidth;
//   const sourceY = row * tileHeight;

//   // Auf das Spielfeld zeichnen
//   ctx.drawImage(
//     spriteSheet,
//     sourceX,
//     sourceY,
//     tileWidth,
//     tileHeight, // AUSSCHNITT: Woher auf der Matrix?
//     canvasX,
//     canvasY,
//     tileWidth,
//     tileHeight, // POSITION: Wohin im Spiel?
//   );
// }
