import Button from "../js/button.js"
// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    // Fondo del menú principal
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "mainmenu_bg"
      )
      .setScale(1.1);

    // Logo de Phaser
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "phaser_logo"
    );

    new Button(this.cameras.main.centerX, this.cameras.main.centerY, "Comenzar", this, ()=>{})
    new Button(this.cameras.main.centerX, this.cameras.main.centerY+50, "Sonido", this, ()=>{})
    new Button(this.cameras.main.centerX, this.cameras.main.centerY+100, "Puntajes", this, ()=>{})
    new Button(this.cameras.main.centerX, this.cameras.main.centerY+150, "Creditos", this, ()=>{})
  }
}
