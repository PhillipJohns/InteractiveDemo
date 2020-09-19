console.log('Hello World')
import Scene1 from '/Scene1.js';
import Scene2 from '/Scene2.js';
import loss from '/gameOver.js';
import Victory from '/victory.js';




var player;
var stars;
var bats;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var levelClear = 1;
var endScreen;
var level1 = new Scene1();
var level2 = new Scene2();
var Loss = new loss();
var victory = new Victory();

var config = {
	type: Phaser.AUTO,
	width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
}


var game = new Phaser.Game(config);


game.scene.add('Scene1', level1);
game.scene.add('Scene2', level2);
game.scene.add('loss', Loss);
game.scene.add('Victory', victory);

game.scene.start('Scene1');