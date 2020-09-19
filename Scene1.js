var gameOver = false;
var cursors;
var player;
var score = 0;
var starsCount = 12
class Scene1 extends Phaser.Scene {
    constructor()
    {
        super('Scene1');
        
        
    }

    
    preload() {
        this.load.image('Background1', 'assets/Background1.png');
        this.load.image('ground', 'assets/platform2.png');
        this.load.image('stars', 'assets/star.png');
        this.load.image('Bat', 'assets/Bat.png');
        this.load.spritesheet('character', 'assets/dude1.png', { frameWidth: 24, frameHeight: 32 });
    }

    create() {
        let levelClear = 1;
        this.add.image(400, 300, 'Background1');

        let platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        player = this.physics.add.sprite(100, 450, 'character');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('character', { start: 12, end: 14 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'character', frame: 1 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('character', { start: 24, end: 26 }),
            frameRate: 10,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();

        let stars = this.physics.add.group({
            key: 'stars',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 },
        });

        let bats = this.physics.add.group({

        });
        {
        bats = bats.create(350, 16, 'Bat');
        bats.setBounce(1);
        bats.setCollideWorldBounds(true);
        bats.setVelocity(Phaser.Math.Between(-150, 150), 20);
        bats.allowGravity = false;
        }


       function collectStar(player, stars)
    {
        stars.disableBody(true, true);

        score += 10;
        scoreText.setText('Score: ' + score);
        starsCount -= 1;

        if (starsCount === 0)
        {
            levelClear += 1;
            this.scene.start('Scene2');
        }

        }

       function hitBat (player, bats)
    {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver = true;

    }

        let scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(bats, platforms);

        this.physics.add.overlap(player, stars, collectStar, null, this);

        this.physics.add.collider(player, bats, hitBat, null, this);
    }

    update ()
    {
        if (gameOver)
        {
            this.scene.start('loss');
        }

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }
    
    

    
    }

    
    


export default Scene1;