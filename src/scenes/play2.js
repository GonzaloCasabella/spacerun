
import Button from "../js/button.js"
var personaje;
var asteroide;

export class Play2 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Play2");
  }

  

  create() {
    this.timercount=50
    this.speed=1
    this.score=0
    this.cursors=this.input.keyboard.createCursorKeys()
    this.space=this.add.image(0,0,"sp2").setOrigin(0)
    this.stars=this.add.tileSprite(this.cameras.main.centerX,this.cameras.main.centerY,800,600,"estrellasN2")
    this.player=this.physics.add.sprite(100,this.cameras.main.centerY,"personaje").setScale(0.3)
    this.scoretext=this.add.text(96,16,"score: 0",{fontSize:"28px",fill:"#fff", fontFamily: 'Fun Games'})
    this.timertext=this.add.text(55,16, "", {fontSize:"28px",fill:"#F4F80D", fontFamily: 'Fun Games'})
    this.player.allowGravity =false
    this.player.immovable=true
    this.player.body.moves=false
    this.asteroides=this.physics.add.group()
    setInterval(()=>{
      if(this.speed==1 && this.timercount>=0){
      var asteroide = this.asteroides.create(800,Phaser.Math.Between(50,550),"asteroide").setScale(0.6)
      asteroide.immovable=true
      asteroide.body.moves=false
      asteroide.setDepth(1)
      }
    },2000)
    this.disparos=this.physics.add.group()
    setInterval(()=>{
      if (this.cursors.space.isDown) {
        this.disparos.create(this.player.x,this.player.y,"disparo").setVelocity(300,0).setScale(0.4)
  
        
      }
    },500)
    this.reloj=this.add.image(24,24,"reloj").setScale(0.5)
    this.physics.add.collider(this.disparos,this.asteroides,this.hitasteroide,null,this)
this.physics.add.overlap(this.player,this.asteroides,this.choque,null,this)
    setInterval(()=>{
      this.timercount--
    },1000)  
    this.panel=this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"panel1").setActive(false)
    this.panel.visible=false
    this.panel.setDepth(2)
    this.boton=new Button(this.cameras.main.centerX, this.cameras.main.centerY+45, "Sala Rocosa", this, ()=>{
      this.scene.start("sala rocosa")
    }).button
    this.boton.visible=false
    this.boton.setDepth(3).setScale(0.4)

    this.panelF=this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"panel3").setActive(false)
    this.panelF.visible=false
    this.panelF.setDepth(2)
    this.botonF=new Button(this.cameras.main.centerX, this.cameras.main.centerY+45, "Reintentar", this, ()=>{
      this.scene.start("Play")
    }).button
    this.botonF.visible=false
    this.botonF.setDepth(3).setScale(0.4)
  }
    

  update() {
    if (this.timercount>=0) {
      this.timertext.text=this.timercount
    } else {
      if (this.score>=15) {
        this.panel.visible=true
      this.boton.visible=true
      } else {
        this.panelF.visible=true
      this.botonF.visible=true
      }
      return}
    this.stars.tilePositionX += this.speed
    if (this.cursors.up.isDown) {
      this.player.y -= 3
    }
    if (this.cursors.down.isDown) {
      this.player.y += 3
    }

    this.asteroides.children.iterate(element => {
      element.x-=this.speed*4
    });
    
    this.scoretext.text="score: "+this.score
    
    
  }

  hitasteroide(disparo,asteroide){
    asteroide.destroy()
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
