import Button from "../js/button.js"
// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class Creditos extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Creditos");
  }

  create() {
    // Fondo del menú principal
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Creditos_bg"
      )
      .setScale(1.1);


    new Button(this.cameras.main.centerX, (this.cameras.main.centerY*2)-50, "volver", this, ()=>{
      this.scene.start("MainMenu")
    }).button.setStyle({fontSize:"18px"})
    
  }
}
