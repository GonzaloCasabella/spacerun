// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Preloads extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    this.load.image("phaser_logo", "public/assets/images/titulo.png");
    this.load.image(
      "mainmenu_bg",
      "public/assets/images/espaciojfE.png"
    );
    this.load.image(
      "Sound_bg",
      "public/assets/images/espaciojfE.png"
    );
    this.load.image(
      "Puntajes_bg",
      "public/assets/images/espaciojfE.png"
    );
    this.load.image(
      "Creditos_bg",
      "public/assets/images/endgame.png"
    );
    this.load.image("fondo_juego", "public/assets/images/espaciojf.png")
    this.load.image("estrellas", "public/assets/images/ESTRELLAS.png")
    this.load.image("personaje", "public/assets/images/personaje.png")
    this.load.image("asteroide", "public/assets/images/asteroide.png")
    this.load.image("disparo", "public/assets/images/disparo.png")
    this.load.image("reloj", "public/assets/images/reloj.png")
    this.load.image("logo", "public/assets/images/titulo.png")
    this.load.image("panel1", "public/assets/images/nivelC.png")
    this.load.image("sr", "public/assets/images/sala rocosa.png")
    this.load.image("panel2", "public/assets/images/SR completada.png")
    this.load.image("panel3", "public/assets/images/nivelF.png")
    this.load.image("sp2", "public/assets/images/spaceN2.png")
    this.load.image("estrellasN2", "public/assets/images/ESTRELLASN2.png")
    this.load.image("Creditos", "public/assets/images/endgame.png")
    this.load.spritesheet("navemotor","public/assets/images/animacion/navemotor.png",{frameWidth:104,frameHeight:109})
    this.load.spritesheet("asteroto","public/assets/images/animacion/asteroto.png",{frameWidth:94,frameHeight:108})
    this.load.audio("timer","public/assets/sounds/timer1.mp3" )
    this.load.audio("tiro","public/assets/sounds/tiro1.mp3" )
  }

  create() {
    this.anims.create({
      key:"navemotor",
      frames:this.anims.generateFrameNumbers ("navemotor",{start:0,end:2}),
      frameRate:10,
      repeat:-1

    })
    this.anims.create({
      key:"asteroto",
      frames:[{key:"asteroto",frame:0}],
      frameRate:10,
      repeat:-1
      
    })
    this.anims.create({
      key:"navequieta",
      frames:[{key:"navemotor",frame:3}],
      frameRate:10,
      repeat:-1
      
    })
    this.scene.start("MainMenu");
  }
}
