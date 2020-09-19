var victoryMessage;
var restartMessage; 
var cursors;

class Victory extends Phaser.Scene {
    constructor()
    {
        super('Victory')
    }
    create(){
        victoryMessage = this.add.text(300, 280, 'You Won!!', { fontSize: '32px', fill: 'white' });
        restartMessage = this.add.text(200, 550, 'Press Left to Restart', { fontSize: '32px', fill: 'white' });
        cursors = this.input.keyboard.createCursorKeys();
    }
    update(){
        if (cursors.left.isDown){
            window.location.reload();
        }
    }
}

export default Victory;