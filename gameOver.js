var gameOverMessage;
var restartMessage; 
var cursors;

class loss extends Phaser.Scene {
    constructor()
    {
        super('loss')
    }
    create(){
        gameOverMessage = this.add.text(300, 280, 'Game Over!!', { fontSize: '32px', fill: 'white' });
        restartMessage = this.add.text(200, 550, 'Press Left to Restart', { fontSize: '32px', fill: 'white' });
        cursors = this.input.keyboard.createCursorKeys();

    }
    update(){
        if (cursors.left.isDown){
            window.location.reload();
        }
}
}

export default loss;