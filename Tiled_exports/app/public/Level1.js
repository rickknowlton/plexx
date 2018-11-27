EnemyYeti = function(index, game, x, y) {


    this.yeti = game.add.sprite(x, y, 'yeti');
    this.yeti.anchor.setTo(0.5, 0.5);
    this.yeti.name = index.toString();
    game.physics.enable(this.yeti, Phaser.Physics.ARCADE);
    this.yeti.body.immovable = true;
    this.yeti.body.collideWorldBounds = true;
    this.yeti.body.allowGravity = false;

    this.yetiTween = game.add.tween(this.yeti).to({
        y: this.yeti.y + 130,

    }, 2000, 'Linear', true, 0, 100, true);

}

var enemy1;

Game.Level1 = function(game) {};

var map;
var layer;

var facing = 'left';
var player;
var controls={};
var playerSpeed = 150;
var jumpTimer = 0;

var shootTime = 0;
var bullets;

var coinCollection;
var coins = 0;

Game.Level1.prototype = {

    create: function(game) {
        this.stage.backgroundColor = '#3A5963'

        this.physics.arcade.gravity.y = 1400;

        map = this.add.tilemap('map', 32, 32);

        map.addTilesetImage('tileset');
        

        layer = map.createLayer(0);

        layer.resizeWorld();

        map.setCollisionBetween(21, 25);

        map.setCollisionBetween(57, 58);
        map.setCollisionBetween(118, 181);
        map.setCollisionBetween(247, 268);

        map.setCollisionBetween(472, 474);
        map.setCollisionBetween(501, 535);
        map.setCollisionBetween(760, 762);




        map.setTileIndexCallback(5, this.resetPlayer, this);
        map.setTileIndexCallback(4, this.hitCoin, this);
        map.setTileIndexCallback(8, this.speedPowerUp, this);
        map.setTileIndexCallback([290 ,319,348,377, 406, 435], this.jumpHigh, this);

        player = this.add.sprite(100, 150, 'bad_dude');
        player.anchor.setTo(0.5, 0.5);

        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('turn', [4], 20, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;

        

        controls = {

            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.UP),

        };

        enemy1 = new EnemyYeti(0, game, player.x + 250, player.y - 200);

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(30, 'bullet');

        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 0.5);

        bullets.setAll('scale.x', 0.5);
        bullets.setAll('scale.x', 0.5);

        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);

        coinCollection = game.add.text(550, 20, 'Coins: 0', {font: "30px Arial", fill: "#ffa500"});


    },

    update:function() {


        this.physics.arcade.collide(player, layer);

        coinCollection.text = (`Coins: ${coins++}`);

        

        

        if(controls.right.isDown) {
            if (facing != 'right') {
                player.animations.play('right');
                facing = 'right';
                player.body.velocity.x += playerSpeed;
            }
        }

        else if(controls.left.isDown) {
            if (facing != 'left') {
                player.animations.play('left');
                facing = 'left';
                player.body.velocity.x -= playerSpeed;
            }   
        }

        else {
            player.body.velocity.x = 0;

            if (facing != 'idle') {
                player.animations.stop();

                if (facing == 'left') {
                    player.frame = 0;
                } 
                else {
                    player.frame = 5;
                }
                facing = 'idle';
            }
        }

        if(controls.up.isDown && (player.body.onFloor() || 
        player.body.touching.down) && this.time.now > jumpTimer) {
        
            player.body.velocity.y = -600;
            jumpTimer = this.time.now + 750;
        }

        if(checkOverlap(player, enemy1.yeti)) {

            this.resetPlayer();

        }

        if(controls.shoot.isDown) {
            this.shootBullet();
        }

        if(checkOverlap(bullets, enemy1.yeti)) {
            enemy1.yeti.kill();
        }

        






    },

    resetPlayer: function() {

        player.reset(50, 220);
    },

    hitCoin:function() {

        map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));
        
    },

    shootBullet: function() {

        if(this.time.now > shootTime) {
            bullet = bullets.getFirstExists(false);
            if(bullet) {
                bullet.reset(player.x, player.y);

                bullet.body.velocity.y = -700;

                shootTime = this.time.now + 900;
            }
        }
    },

    speedPowerUp:function() {

        // map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));

        // playerSpeed += 100;
        player.body.velocity.x +=85;
        

        this.time.events.add(Phaser.Timer.SECOND *1 , function() {

            // playerSpeed -=100;
            player.body.velocity.x -=85;
            
        })

    },
    jumpHigh:function() {

        // map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));

        // playerSpeed += 100;
        player.body.velocity.y +=2;
        

        this.time.events.add(Phaser.Timer.SECOND *.5 , function() {

            // playerSpeed -=100;
            player.body.velocity.y -=7;
            
        })

    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
}