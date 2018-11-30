EnemyYeti = function(index, game, x, y) {


    this.yeti = game.add.sprite(x,  y, 'monkey');
    game.physics.arcade.enable(this.yeti);
    this.yeti.body.bounce.y = 0.2;
    this.yeti.body.gravity.y = gravity;
    this.yeti.body.collideWorldBounds = true;
    this.yeti.body.velocity.x = -100;
    this.yeti.maxDistance = 200;
    this.yeti.previousX = this.yeti.x;
    this.yeti.anchor.setTo(0.5, 0.5);
    this.yeti.name = index.toString();
    this.yeti.animations.add('left', [0, 1, 2, 3,], 10, true);
    this.yeti.animations.add('turn', [4], 20, true);
    this.yeti.animations.add('right', [5, 6, 7, 8], 10, true);

};

Coins = function(index, game, x, y) {


    this.coin = game.add.sprite(x, y, 'coin');
    game.physics.arcade.enable(this.coin);
    this.coin.body.bounce.y = 0.7 + Math.random() * 0.2;
    this.coin.body.gravity.y = gravity;
    // this.coin.body.collideWorldBounds = true;
    // this.coin.body.velocity.x = -100;
    // this.coin.maxDistance = 200;
    // this.coin.previousX = this.coin.x;
    this.coin.anchor.setTo(0.5, 0.5);
    this.coin.name = index.toString();
    
    this.coin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
};

TreeBranch = function(index, game, x, y) {

    this.ledge = game.add.sprite(x, y, 'ground');
    game.physics.arcade.enable(this.ledge);
    this.ledge.anchor.setTo(0.5, 0.5);
    this.ledge.body.immovable = true;
};

TreeBranch2 = function(index, game, x, y) {

    this.ledge = game.add.sprite(x, y, 'ground2');
    game.physics.arcade.enable(this.ledge);
    this.ledge.anchor.setTo(0.5, 0.5);
    this.ledge.body.immovable = true;
};



Game.Level1 = function(game) {};

var map;
var layer;

var facing = 'left';
var player;
var controls={};
var playerSpeed = 250;
var jumpTimer = 0;

var shootTime = 0;
var bullets;
var lives = 10;

var coins = 0;
var score = 0;


var gravity = 1400;
var ladders;
var onLadder = false;

var springs;
var onSpring = false;

var yeti;
var platforms;
var enemy1;
var coin1;
var treeBranch1;

var background;
var endZone;
var onEndZone = false;

Game.Level1.prototype = {

    create: function(game) {

        // this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        // this.scale.pageAlignHorizontally = true;

        this.stage.backgroundColor = '#3A5963'

        // background = this.game.add.image(0, 0, 'background');

        // this.physics.arcade.gravity.y = 1400;

        map = this.add.tilemap('map', 32, 32);

        map.addTilesetImage('tileset');
        

        layer = map.createLayer(0);

        layer.resizeWorld();

        // map.setCollisionBetween(21, 25);

        map.setCollisionBetween(57, 58);
        map.setCollisionBetween(118, 181);
        map.setCollisionBetween(247, 268);

        map.setCollisionBetween(652, 657);
        map.setCollisionBetween(691, 703);
        map.setCollisionBetween(731, 743);
        map.setCollisionBetween(745,756);
        map.setCollisionBetween(771,783);
        map.setCollisionBetween(785,792);
        map.setCollisionBetween(888,890);
        map.setCollisionBetween(848, 852);
        map.setCollisionBetween(808, 832);
        map.setCollisionBetween(920, 1047);




        map.setTileIndexCallback(5, this.resetPlayer, this);
        map.setTileIndexCallback(4, this.hitCoin, this);
        map.setTileIndexCallback(8, this.speedPowerUp, this);
        // map.setTileIndexCallback([290 ,319,348,377, 406, 435], this.jumpHigh, this);

        // platforms = game.add.group();
        // platforms.enableBody = true;
        // var ground = platforms.create(1, game.world.height - 700, 'ground');
        // ground.scale.setTo(2, 2);
        // ground.body.immovable = true;
        // var ledge = platforms.create(500, 320, 'ground');
        // ledge.body.immovable = true;
        // ledge.body.collideDown = false;
        
        springs = game.add.group();
        springs.enableBody = true;
        var spring = springs.create(1088, 2144, 'spring');
        spring.body.immovable = true;

        ladders = game.add.group();
        ladders.enableBody = true;
        var ladder = ladders.create(800, 700, 'ladder');
        ladder.body.immovable = true;

        endZone = game.add.group();
        endZone.enableBody = true;
        var endGame = endZone.create(800, 700, 'endZone');
        endGame.body.immovable = true;
        
        player = this.add.sprite(100, 2200, 'bad_dude');
        player.anchor.setTo(.5, .5);
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('turn', [4], 20, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = gravity;

        // player.body.collideWorldBounds = true;
        //set a flag for when player gets hit by yeti
        player.dead = false;

        
        // yeti = game.add.sprite(500, 280, 'yeti');
        // // yeti.body.immovable = true;
        // this.physics.arcade.enable(yeti);
        // yeti.body.bounce.y = 0.2;
        // yeti.body.gravity.y = gravity;

        // yeti.body.collideWorldBounds = true;
        // yeti.body.velocity.x = -100;
        // yeti.maxDistance = 200;
        // yeti.previousX = yeti.x;
        // yeti.anchor.setTo(.5, .5);
        

       

        controls = {
            up: this.input.keyboard.addKey(Phaser.Keyboard.W),
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            
            down: this.input.keyboard.addKey(Phaser.Keyboard.S),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            shootLeft: this.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            shootRight: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),

        };

        enemy1 = new EnemyYeti(320, game, 820, 2180);
        coin1 = new Coins(320, game, 940, 1975);
        coin2 = new Coins(320, game, 970, 1975);
        treeBranch1 = new TreeBranch(320, game, 704, 2300);
        treeBranch2 = new TreeBranch2(320, game, 928, 2332);


        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(5, 'banana');

        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 0.5);

        bullets.setAll('scale.x', 0.5);
        bullets.setAll('scale.y', 0.5);

        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);

        coinCollection = game.add.text(700,1800, 'Coins: 0', {font: "30px Arial", fill: "#ffa500"});
        enemyHit = game.add.text(200, 1800, 'Score: 0', {font: "30px Arial", fill: "#ffffff"});
        livesLeft = game.add.text(350, 1800, 'Lives Left: 10', {font: "30px Arial", fill: "#ffa500"});

        
       

    },

    update:function() {

        
        

        enemy1.yeti.animations.play('left');
        coin1.coin.animations.play('right');
        coin2.coin.animations.play('right');
        
        

        this.physics.arcade.collide(player, layer);
        
        // player.angle += 1;

        onLadder = false;

        onSpring = false;
        
        onEndZone = false;

        player.body.gravity.y = gravity;

        this.physics.arcade.collide(player, treeBranch1.ledge);

        this.physics.arcade.collide(coin1.coin, treeBranch2.ledge);
        this.physics.arcade.collide(coin2.coin, treeBranch2.ledge);

        this.physics.arcade.collide(enemy1.yeti, treeBranch1.ledge);

        //check how far baddie has travelled. If past maximum amount then switch direction
        if (Math.abs(enemy1.yeti.x - enemy1.yeti.previousX) >= enemy1.yeti.maxDistance) {
            switchDirection(enemy1.yeti);
        }

        this.physics.arcade.overlap(player, enemy1.yeti, hitYeti);
        
        this.physics.arcade.overlap(player, ladders, isOnLadder);

        this.physics.arcade.overlap(player, springs, isOnSpring);

        this.physics.arcade.overlap(player, coin1.coin);
        this.physics.arcade.overlap(player, coin2.coin);

        this.physics.arcade.overlap(player, endZone, isOnEndZone);
        
        player.body.velocity.x = 0;
        
        if(!player.dead) {

            player.body.velocity.x = 0;

            if(controls.right.isDown) {
                player.body.velocity.x  = playerSpeed;
                if (facing != 'right') {
                    player.animations.play('right');
                    facing = 'right';
                    
                }
            }

            
    
            else if(controls.left.isDown) {

                player.body.velocity.x = -playerSpeed;
                if (facing != 'left') {
                    player.animations.play('left');
                    facing = 'left';
                    
                }   
            }
    
            else {
                
    
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
    
            if(onLadder) {
                if(controls.up.isDown) {
                    player.body.velocity.y = -playerSpeed/2;
                }
                if(controls.down.isDown) {
                    player.body.velocity.y = playerSpeed/2;
                }
                if(!controls.up.isDown && !controls.down.isDown)  {
                    player.body.gravity.y = 0;
                    player.body.velocity.y = 0;
                    // player.body.bounce.y = 0.9;
                }
            };

            if(onSpring) {
                // if(controls.up.isDown) {
                //     player.body.velocity.y = playerSpeed /2;
                // }
                // if(controls.down.isDown) {
                //     player.body.velocity.y = playerSpeed /2;
                // }
                if(!controls.up.isDown && !controls.down.isDown)  {
                    
                    // player.body.velocity.x = 0;
                    // player.body.velocity.y *= -1000;
                    
                }
            };
            

        };

        
        

        if(checkOverlap(player, coin1.coin)) {
            

            if(!coin1.coin.hit && !player.dead) {

                coin1.coin.hit = true;
                coin1.coin.body.velocity.y = -100;

                var tween = this.add.tween(coin1.coin).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(coin1.coin.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }

        if(checkOverlap(player, coin2.coin)) {
            

            if(!coin2.coin.hit && !player.dead) {

                coin2.coin.hit = true;
                coin2.coin.body.velocity.y = -100;

                var tween = this.add.tween(coin2.coin).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(coin2.coin.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        

        if(controls.shoot.isDown) {
            this.shootBullet();
        }
        if(controls.shootRight.isDown) {
            this.shootBulletRight();
        }
        if(controls.shootLeft.isDown) {
            this.shootBulletLeft();
        }

        if(checkOverlap(bullets, enemy1.yeti)) {
            enemy1.yeti.kill();
            score =+ 10;
            enemyHit.text = 'Score: ' + score;
        }
        if(checkOverlap(player, springs)) {
            player.body.velocity.y = +playerSpeed*-8;
        }

        if(checkOverlap(player, endZone)) {

            console.log('you win');

            player.game.state.restart();
        }
        
    },

    

    // resetPlayer: function() {

    //     player.reset(100, 175);
    // },

    hitCoin:function(player, tile) {

        
        map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));
        
        
        
    },

    

    shootBullet: function() {

        if(this.time.now > shootTime) {
            bullet = bullets.getFirstExists(false);
            if(bullet) {
                bullet.reset(player.x, player.y);

                bullet.body.velocity.y = -1300;

                shootTime = this.time.now + 900;
            }
        }
    },
    shootBulletRight: function() {

        if(this.time.now > shootTime) {
            bullet = bullets.getFirstExists(false);
            if(bullet) {
                bullet.reset(player.x, player.y);

                bullet.body.velocity.x = 1300;

                shootTime = this.time.now + 900;
            }
        }
    },
    shootBulletLeft: function() {

        if(this.time.now > shootTime) {
            bullet = bullets.getFirstExists(false);
            if(bullet) {
                bullet.reset(player.x, player.y);

                bullet.body.velocity.x = -1300;

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

        
        this.time.events.add(Phaser.Timer.SECOND *2 , function() {

           
            
        })

    }
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
};

function hitYeti(player, yeti) {

    // this.resetPlayer();
    if(yeti.body.touching.up && !yeti.hit) {

        yeti.hit = true;
        yeti.body.velocity.y = -100;
        yeti.body.velocity.x = 0;
        
        player.body.velocity.y = -600;

        var yetiTween = enemy1.yeti.game.add.tween(yeti),
        yetiScaleTween = enemy1.yeti.game.add.tween(yeti.scale);

        yetiTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
        yetiScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        yetiTween.onComplete.add(removeSprite);

        yetiScaleTween.start();
        yetiTween.start();

        score =+ 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 100, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        lives -= 1;
        livesLeft.text = 'Lives Left:' + lives;

        


    }

};





//when hero and ladder are touching, this is called
function isOnLadder() {
  onLadder = true;
};

function isOnSpring() {
  onSpring = true;
  
};

function isOnEndZone() {
    onEndZone = true;
    
  };

function removeSprite(sprite) {
    // Removes the sprite from the screen
    sprite.kill();
};

function switchDirection() {
   //reverse velocity so baddie moves are same speed but in opposite direction
   enemy1.yeti.body.velocity.x *= -1;
   //reset count
   enemy1.yeti.previousX = enemy1.yeti.x;
};

function restartGame() {

   
    player.game.state.restart();
    // player.reset(100, 2200);

    var playerTween2 = player.game.add.tween(player),
        playerScaleTween2 = player.game.add.tween(player.scale);

        //assign tween values
        playerTween2.to({ alpha: 1,  angle: 360}, 100, Phaser.Easing.Linear.None);
        playerScaleTween2.to({ x: 1, y:1 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        // playerScaleTween2.onComplete.add(resetPlayer);

        //start the tweens
        playerScaleTween2.start();
        playerTween2.start();
        
};


