
import Button from "../js/button.js"
var personaje;
var asteroide;

// Clase Play, donde se crean todos los sprites, el escenario del juego y se inicializa y actualiza toda la logica del juego.
export class Salarocosa extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("sala rocosa");
  }

  

  create() {
    this.timersonido=this.sound.add("timer")
    this.tirosonido=this.sound.add("tiro")
    this.timercount=90
    this.speed=1
    this.score=0
    this.cursors=this.input.keyboard.createCursorKeys()
    this.space=this.add.tileSprite(this.cameras.main.centerX,this.cameras.main.centerY,800,600,"sr")
    this.player=this.physics.add.sprite(this.cameras.main.centerX,50,"personaje").setScale(0.3)
    this.scoretext=this.add.text(99,16,"score: 0",{fontSize:"14px",fill:"#000", fontFamily: 'Advanced Pixel LCD-7'})
    this.timertext=this.add.text(55,16, "", {fontSize:"28px",fill:"#f00", fontFamily: 'Fun Games'})
    this.player.allowGravity =false
    this.player.immovable=true
    this.player.body.moves=false
    this.asteroides=this.physics.add.group()
    setInterval(()=>{
      if(this.speed==1 && this.timercount>=0){
      var asteroide = this.asteroides.create(Phaser.Math.Between(50,750),600,"asteroide").setScale(0.6)
      asteroide.immovable=true
      asteroide.body.moves=false
      asteroide.setDepth(1)
      }
    },500)
    this.disparos=this.physics.add.group()
    setInterval(()=>{
      if (this.cursors.space.isDown) {
        this.disparos.create(this.player.x,this.player.y,"disparo").setVelocity(0,300).setScale(0.4).setAngle(90)
        this.tirosonido.play()
        
      }
    },500)
    this.reloj=this.add.image(24,24,"reloj").setScale(0.5)
    this.physics.add.collider(this.disparos,this.asteroides,this.hitasteroide,null,this)
this.physics.add.overlap(this.player,this.asteroides,this.choque,null,this)
    setInterval(()=>{
      this.timercount--
      if (this.timercount<=10) {
        this.timersonido.play()
      }
    },1000)  
    this.panel=this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"panel2").setActive(false)
    this.panel.visible=false
    this.panel.setDepth(2)
    this.boton=new Button(this.cameras.main.centerX, this.cameras.main.centerY+45, "Siguiente Nivel", this, ()=>{
      this.scene.start("Play2")
    }).button
    this.boton.visible=false
    this.boton.setDepth(3).setScale(0.4)
  }
    

  update() {
    if (this.timercount>=0) {
      this.timertext.text=this.timercount
    } else {
      this.panel.visible=true
      this.boton.visible=true
      return}
    this.space.tilePositionY += this.speed
    if (this.cursors.left.isDown && this.player.x>20) {
      this.player.x -= 3
      this.player.anims.play("navemotor",true)
    }
    if (this.cursors.right.isDown && this.player.x<780) {
      this.player.x += 3
      this.player.anims.play("navemotor",true)
    }
    if (this.cursors.down.isUp&&this.cursors.up.isUp) {
      this.player.anims.play("navequieta",true)
    }

    this.asteroides.children.iterate(element => {
      element.y-=this.speed*4
    });
    
    this.scoretext.text="score: "+this.score
    
    
  }

  hitasteroide(disparo,asteroide){
    asteroide.anims.play("asteroto",true)
    setTimeout(()=>{
      asteroide.destroy()
    },500)
    disparo.destroy()
    this.score++
  }

  choque(player,asteroide){
    this.speed=0.3
    setTimeout(()=>{
      this.speed=1
    },2500)
  }

}
