import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Play } from "../scenes/play.js";
import { Salarocosa } from "../scenes/salarocosa.js";
import { Play2 } from "../scenes/play2.js";
import { Creditos } from "../scenes/Creditos.js";
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads, MainMenu,Play,Salarocosa,Play2,Creditos],
};
var game = new Phaser.Game(config);