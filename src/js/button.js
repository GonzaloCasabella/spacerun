// Clase Boton, para no repetir tanto codigo
class Button {
    constructor(x, y, label, scene, callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
               
                fontSize: '50px', 
                fill: '#fff', 
                fontFamily: 'Fun Games'
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#ff0000' }))
            .on('pointerout', () => button.setStyle({ fill: '#fff' }));
    }
}


export default Button;