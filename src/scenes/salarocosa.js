// Declaracion de variables para esta escena
var personaje;
var asteroide;

// Clase Play, donde se crean todos los sprites, el escenario del juego y se inicializa y actualiza toda la logica del juego.
export class Play extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Play");
  }

  

  create() {
    this.speed=1
    this.score=0
    this.cursors=this.input.keyboard.createCursorKeys()
    this.space=this.add.image(0,0,"sala rocosa.png").setOrigin(0)
    this.space=this.add.image(0,2,"titulo").setOrigin(0)
    this.stars=this.add.tileSprite(this.cameras.main.centerX,this.cameras.main.centerY,800,600,"estrellas")
    this.player=this.physics.add.sprite(100,this.cameras.main.centerY,"personaje").setScale(0.3)
    this.scoretext=this.add.text(16,16,"score: 0",{fontSize:"32px",fill:"#0000"})
    this.player.allowGravity =false
    this.player.immovable=true
    this.player.body.moves=false
    this.asteroides=this.physics.add.group()
    setInterval(()=>{
      if(this.speed==1){
      var asteroide = this.asteroides.create(800,Phaser.Math.Between(50,550),"asteroide").setScale(0.6)
      asteroide.immovable=true
      asteroide.body.moves=false
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
  }
    

  update() {
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
