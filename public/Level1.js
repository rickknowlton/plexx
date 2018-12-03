EnemyYeti = function(index, game, x, y) {


    this.yeti = game.add.sprite(x,  y, 'monkey');
    game.physics.arcade.enable(this.yeti);
    this.yeti.body.bounce.y = 0.2;
    this.yeti.body.gravity.y = gravity;
    this.yeti.body.collideWorldBounds = true;
    this.yeti.body.velocity.x = -100;
    this.yeti.maxDistance = 200;
    this.yeti.maxDistance2 = 300;
    this.yeti.previousX = this.yeti.x;
    this.yeti.previousX2 = this.yeti.x + 20;
    this.yeti.anchor.setTo(0.5, 0.5);
    this.yeti.name = index.toString();
    this.yeti.animations.add('left', [0, 1, 2, 3,], 10, true);
    this.yeti.animations.add('turn', [4], 20, true);
    this.yeti.animations.add('right', [5, 6, 7, 8], 10, true);

};

EnemyBear = function(index, game, x, y) {


    this.bear = game.add.sprite(x,  y, 'bear');
    game.physics.arcade.enable(this.bear);
    this.bear.body.bounce.y = 0.2;
    this.bear.body.gravity.y = gravity;
    this.bear.body.collideWorldBounds = true;
    this.bear.body.velocity.x = -20;
    this.bear.maxDistance = 100;
    
    this.bear.previousX = this.bear.x;
    
    this.bear.anchor.setTo(0.5, 0.5);
    this.bear.name = index.toString();
    this.bear.animations.add('left', [0, 1, 2, 3], 2, true);
    // this.bear.animations.add('turn', [4], 20, true);
    // this.bear.animations.add('right', [4, 5, 6, 7], 10, true);

};

EnemyToucan = function(index, game, x, y) {


    this.toucan = game.add.sprite(x,  y, 'toucan');
    game.physics.arcade.enable(this.toucan);
    // this.toucan.body.bounce.y = 0.2;
    // this.toucan.body.gravity.y = gravity;
    this.toucan.body.collideWorldBounds = true;
    // this.toucan.body.velocity.x = -100;
    this.toucan.maxDistance = 200;
    this.toucan.maxDistance2 = 300;
    this.toucan.previousX = this.toucan.x;
    this.toucan.previousX2 = this.toucan.x + 20;
    this.toucan.anchor.setTo(0.5, 0.5);
    this.toucan.name = index.toString();
    this.toucan.animations.add('left', [0, 1, 2, 3,], 6, true);
    // this.bear.animations.add('turn', [4], 20, true);
    // this.bear.animations.add('left', [0, 1, 2, 3,], 6, true);

};

EnemyGhost = function(index, game, x, y) {


    this.ghost = game.add.sprite(x,  y, 'ghost');
    game.physics.arcade.enable(this.ghost);
    // this.ghost.body.bounce.y = 0.2;
    // this.ghost.body.gravity.y = gravity;
    this.ghost.body.collideWorldBounds = true;
    this.ghost.body.velocity.x = -100;
    this.ghost.maxDistance = 200;
    this.ghost.previousX = this.ghost.x;
    this.ghost.anchor.setTo(0.5, 0.5);
    this.ghost.name = index.toString();
    this.ghost.animations.add('left', [0, 1, 2, 3,4, 5, 6, 7, 8], 10, true);
    

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

FloatingCoins = function(index, game, x, y) {


    this.coinz = game.add.sprite(x, y, 'coin');
    game.physics.arcade.enable(this.coinz);
    // this.coin.body.bounce.y = 0.7 + Math.random() * 0.2;
    // this.coin.body.gravity.y = gravity;
    // this.coin.body.collideWorldBounds = true;
    // this.coin.body.velocity.x = -100;
    // this.coin.maxDistance = 200;
    // this.coin.previousX = this.coin.x;
    this.coinz.anchor.setTo(0.5, 0.5);
    this.coinz.name = index.toString();
    
    this.coinz.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
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

TreeBranch3 = function(index, game, x, y) {

    this.ledge3 = game.add.sprite(x, y, 'ground3');
    game.physics.arcade.enable(this.ledge3);
    this.ledge3.anchor.setTo(0.5, 0.5);
    this.ledge3.body.immovable = true;
};
TreeBranch4 = function(index, game, x, y) {

    this.ledge4 = game.add.sprite(x, y, 'ground4');
    game.physics.arcade.enable(this.ledge4);
    this.ledge4.anchor.setTo(0.5, 0.5);
    this.ledge4.body.immovable = true;
};
TreeBranch5 = function(index, game, x, y) {

    this.ledge5 = game.add.sprite(x, y, 'ground5');
    game.physics.arcade.enable(this.ledge5);
    this.ledge5.anchor.setTo(0.5, 0.5);
    this.ledge5.body.immovable = true;
};
TreeBranch6 = function(index, game, x, y) {

    this.ledge6 = game.add.sprite(x, y, 'ground6');
    game.physics.arcade.enable(this.ledge6);
    this.ledge6.anchor.setTo(0.5, 0.5);
    this.ledge6.body.immovable = true;
};
TreeBranch7 = function(index, game, x, y) {

    this.ledge7 = game.add.sprite(x, y, 'ground7');
    game.physics.arcade.enable(this.ledge7);
    this.ledge7.anchor.setTo(0.5, 0.5);
    this.ledge7.body.immovable = true;
};
TreeBranch8 = function(index, game, x, y) {

    this.ledge8 = game.add.sprite(x, y, 'ground8');
    game.physics.arcade.enable(this.ledge8);
    this.ledge8.anchor.setTo(0.5, 0.5);
    this.ledge8.body.immovable = true;
};
TreeBranch9 = function(index, game, x, y) {

    this.ledge9 = game.add.sprite(x, y, 'ground9');
    game.physics.arcade.enable(this.ledge9);
    this.ledge9.anchor.setTo(0.5, 0.5);
    this.ledge9.body.immovable = true;
};
TreeTrunk1 = function(index, game, x, y) {

    this.trunk = game.add.sprite(x, y, 'trunk1');
    game.physics.arcade.enable(this.trunk);
    this.trunk.anchor.setTo(0.5, 0.5);
    this.trunk.body.immovable = true;
};

TreeTrunk2 = function(index, game, x, y) {

    this.trunk2 = game.add.sprite(x, y, 'trunk2');
    game.physics.arcade.enable(this.trunk2);
    this.trunk2.anchor.setTo(0.5, 0.5);
    this.trunk2.body.immovable = true;
};

SpringJump = function(index, game, x, y) {

    this.spring = game.add.sprite(x, y, 'spring');
    game.physics.arcade.enable(this.spring);
    this.spring.anchor.setTo(0.5, 0.5);
    this.spring.body.immovable = true;
    this.acceleration = 100;
};

HangingVine = function(index, game, x, y) {

    this.vine = game.add.sprite(x, y, 'vine_1');
    game.physics.arcade.enable(this.vine);
    this.vine.anchor.setTo(0.5, 0.5);
    this.vine.body.immovable = true;
};

HangingVine2 = function(index, game, x, y) {

    this.vine2 = game.add.sprite(x, y, 'vine_2');
    game.physics.arcade.enable(this.vine2);
    this.vine2.anchor.setTo(0.5, 0.5);
    this.vine2.body.immovable = true;
};

HangingVine3 = function(index, game, x, y) {

    this.vine3 = game.add.sprite(x, y, 'vine_3');
    game.physics.arcade.enable(this.vine3);
    this.vine3.anchor.setTo(0.5, 0.5);
    this.vine3.body.immovable = true;
};

Stone1 = function(index, game, x, y) {

    this.stone = game.add.sprite(x, y, 'stone_1');
    game.physics.arcade.enable(this.stone);
    this.stone.anchor.setTo(0.5, 0.5);
    this.stone.body.immovable = true;
};

Ladder3 = function(index, game, x, y) {

    this.ladder3 = game.add.sprite(x, y, 'ladder_3');
    game.physics.arcade.enable(this.ladder3);
    this.ladder3.anchor.setTo(0.5, 0.5);
    this.ladder3.body.immovable = true;
};

Spikes = function(index, game, x, y) {

    this.spike = game.add.sprite(x, y, 'spike');
    game.physics.arcade.enable(this.spike);
    this.spike.anchor.setTo(0.5, 0.5);
    this.spike.body.immovable = true;
};
Spikez = function(index, game, x, y) {

    this.spike2 = game.add.sprite(x, y, 'spike2');
    game.physics.arcade.enable(this.spike2);
    this.spike2.anchor.setTo(0.5, 0.5);
    this.spike2.body.immovable = true;
};



Game.Level1 = function(game) {};

var map;
var map2;
var layer;

var facing = 'right';
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

var _ladder1;
var _ladder2;

var spring1;
var spring2;
var spring3;
var spring4;
var spring5;
var spring6;
var spring7;
var spring8;
var spring9;
var spring10;
var spring11;
// var springs;
var onSpring = false;

var yeti;
var bear_1;
var bear_2;
var platforms;
var enemy1;
var coin1;
var coin2;
var coin3;
var coin4;

var floatingCoin1;
var floatingCoin2;
var floatingCoin3;
var floatingCoin4;
var floatingCoin5;
var floatingCoin6;
var floatingCoin7;
var floatingCoin8;
var floatingCoin9;
var floatingCoin10;
var floatingCoin11;
var floatingCoin12;
var floatingCoin13;
var floatingCoin14;
var floatingCoin15;



var treeBranch1;
var treeBranch2;
var treeBranch3;
var treeBranch4;
var treeBranch5;
var treeBranch6;
var treeBranch7;
var treeBranch8;
var treeBranch9;
var treeBranch10;
var treeBranch11;
var treeBranch12;
var treeBranch13;
var treeBranch14;
var treeBranch15;
var treeBranch16;
var treeBranch17;

var tree_trunk1;
var tree_trunk2;
var tree_trunk3;

var _trunk1;

var background;
var endZone;
var onEndZone = false;

var mountainBg;
var SPEED = 200;

var ledge3;
var ledge4;
var ledge5;
var ledge6;
var ledge7;

var vine_1;
var vine_2;
var vine_3;

var _spike1;
var _spike2;
var _spike3;
var _spike4;
var _spike4;
var _spike6;

var _spikez1;

var stone_1

var bear_1;

var ghost1;

var toucan_1;
var toucan_2;
var toucan_3;
var toucan_4

var testMonkeySound1;

Game.Level1.prototype = {

    create: function(game) {
        this.stage.backgroundColor = '#5084A3'

        // background = this.game.add.image(0, 0, 'background');

        


        map = this.add.tilemap('map', 32, 32);
        

        map.addTilesetImage('tileset');
        
        this.stage.background = this.add.tileSprite(0, 1910, 1250, 650, 'background');
        
        this.stage.background.autoScroll(-10, 0);

        this.testSpringSound = this.add.audio('springSound');
        this.testSpringSound2 = this.add.audio('springSound2');
        this.testSpringSound4 = this.add.audio('springSound4');
        this.testCoinSound1 = this.add.audio('coin1');
        testMonkeySound1 = this.add.audio('testMonkeySound1');
        damageSound1 = this.add.audio('damage1');
        spike = this.add.audio('spike');
        bearSound = this.add.audio('bearSound');
        toucanSound = this.add.audio('toucanSound');
        winSound = this.add.audio('winSound');
        bushSound = this.add.audio('bushSound');
        jumpSound = this.add.audio('jump1');

        layer = map.createLayer(0);

        layer.resizeWorld();

        map.setCollisionBetween(0, 4);
        map.setCollisionBetween(23, 24);
        map.setCollisionBetween(86, 93);
        map.setCollisionBetween(107, 110);
        // map.setCollisionBetween(118, 181);
        // map.setCollisionBetween(247, 268);

        // map.setCollisionBetween(652, 672);
        // map.setCollisionBetween(691, 712);
        // map.setCollisionBetween(731, 743);
        // map.setCollisionBetween(745,756);
        // map.setCollisionBetween(771,783);
        // map.setCollisionBetween(785,792);
        // map.setCollisionBetween(888,890);
        // map.setCollisionBetween(848, 852);
        map.setCollisionBetween(309, 313);
        map.setCollisionBetween(719,721);
        map.setCollisionBetween(805,811);
        map.setCollisionBetween(966,974);
        map.setCollision(889);
        map.setCollisionBetween(895,896);
        map.setCollisionBetween(980,985);
        map.setCollisionBetween(992,998);
        
        map.setCollisionBetween(1051, 1060);
        map.setCollisionBetween(1067,1078);
        map.setCollisionBetween(1137,1144);

        map.setCollision(1147);
        map.setCollisionBetween(1225,1232);
        map.setCollisionBetween(1254,1259);
        map.setCollisionBetween(1292, 1309);

        map.setCollisionBetween(1308, 1318);
        map.setCollisionBetween(1395, 1399);
        map.setCollisionBetween(1418,1421);
        map.setCollisionBetween(1430,1431);
        map.setCollisionBetween(1480, 1489);
        map.setCollisionBetween(1566, 1574);
        map.setCollisionBetween(1588,1593);
        map.setCollisionBetween(1599, 1601);
        map.setCollisionBetween(1650, 1654);
        map.setCollisionBetween(1673,1684);
        map.setCollisionBetween(1735, 1739);
        map.setCollisionBetween(1808, 1809);
        map.setCollisionBetween(1905, 1909);
        // map.setCollisionBetween(1742,1760);
        // map.setCollisionBetween(1820, 1824);
        // map.setCollisionBetween(1905, 1909);
        map.setCollisionBetween(1998, 2001);
        map.setCollisionBetween(2083, 2089);
        map.setCollisionBetween(2160, 2171);
        map.setCollisionBetween(2330, 2334);
        map.setCollisionBetween(2415, 2419);


        // map.setCollisionBetween(2445, 2449);
        map.setCollisionBetween(2500, 2511);
        map.setCollisionBetween(2585, 2596);
        map.setCollisionBetween(2670, 2678);
        map.setCollisionBetween(2755, 2759);
        map.setCollisionBetween(2840, 2844);
        map.setCollisionBetween(2925, 2933);

        map.setCollisionBetween(3095, 3099);
        map.setCollisionBetween(3010, 3014);
        map.setCollisionBetween(3180, 3184);
        map.setCollisionBetween(3265, 3276);
        map.setCollisionBetween(3350, 3361);
        map.setCollisionBetween(3435, 3446);
        map.setCollisionBetween(3520, 3524);
        map.setCollisionBetween(3605, 3609);
        map.setCollisionBetween(3690, 3694);
        map.setCollisionBetween(3755, 3759);
        map.setCollisionBetween(3860, 3864);
        map.setCollisionBetween(3945, 3949);
        map.setCollisionBetween(4030, 4034);
        map.setCollisionBetween(4115, 4119);
        map.setCollisionBetween(4200, 4204);
        map.setCollisionBetween(4285, 4289);
        map.setCollisionBetween(4370, 4374);
        map.setCollisionBetween(4455, 4458);
        map.setCollisionBetween(4540, 4544);
        map.setCollisionBetween(4625, 4629);
        map.setCollisionBetween(4710, 4714);
        map.setCollisionBetween(4792, 4799);
        map.setCollisionBetween(4877, 4884);
        map.setCollisionBetween(4962, 4969);

        map.setCollisionBetween(4857, 4861);
        map.setCollisionBetween(4941, 4944);
        map.setCollisionBetween(5026, 5031);
        map.setCollisionBetween(5111, 5116);
        map.setCollisionBetween(5148, 5155);
        map.setCollisionBetween(5232, 5240);
        map.setCollisionBetween(5193, 5200);
        map.setCollisionBetween(5278, 5283);
        map.setCollisionBetween(5314, 5332);
       
        map.setCollisionBetween(5365, 5370);
        map.setCollisionBetween(5390, 5394);
        map.setCollisionBetween(5440, 5454);
        map.setCollisionBetween(5475, 5479);
        map.setCollisionBetween(5560, 5564);
        map.setCollisionBetween(5645, 5649);
        map.setCollisionBetween(5993, 6029);





        map.setTileIndexCallback(9, this.resetPlayer, this);
        // map.setTileIndexCallback(4, this.hitCoin, this);
        // map.setTileIndexCallback(0, this.speedPowerUp, this);
        // map.setTileIndexCallback([290 ,319,348,377, 406, 435], this.jumpHigh, this);

        // platforms = game.add.group();
        // platforms.enableBody = true;
        // var ground = platforms.create(1, game.world.height - 700, 'ground');
        // ground.scale.setTo(2, 2);
        // ground.body.immovable = true;
        // var ledge = platforms.create(500, 320, 'ground');
        // ledge.body.immovable = true;
        // ledge.body.collideDown = false;
        
        // springs = game.add.group();
        // springs.enableBody = true;
        // var spring = springs.create(1088, 2144, 'spring');
        
        
        // spring.body.immovable = true;

        // ladders = game.add.group();
        // ladders.enableBody = true;
        // var ladder = ladders.create(800, 1200, 'ladder');
        // ladder.body.immovable = true;

        



        endZone = game.add.group();
        endZone.enableBody = true;
        var endGame = endZone.create(2493, 960, 'endZone');
        endGame.body.immovable = true;
        
        player = this.add.sprite(100, 2200, 'bad_dude');
        player.anchor.setTo(.5, .5);
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('turn', [4], 20, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
        player.animations.add('vine', [9], 10, true);
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        // player.body.bounce.y = 0.2;
        player.body.gravity.y = gravity;
        // player.body.gravity.x = gravity;

        player.body.onOutOfBounds = true;
        player.body.collideWorldBounds = true;
        //set a flag for when player gets hit by yeti
        player.dead = false;

        // player.events.onOutOfBounds.add(killPlayer, this);
        
        // player.body.outOfBoundsKill= true;
        player.body.checkWorldBound=true;

        player.body.checkCollision.up = false;
        player.body.checkCollision.down = true;
        
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
        enemy2 = new EnemyYeti(320, game, 1500, 500);
        enemy3 = new EnemyYeti(320, game, 1800, 700);

        bear_1 = new EnemyBear(320, game, 2330, 2200);
        bear_2 = new EnemyBear(320, game, 2190, 2200);

        toucan_1 = new EnemyToucan(320, game, 1320, 2320);
        toucan_2 = new EnemyToucan(320, game, 1320, 2450);
        toucan_3 = new EnemyToucan(320, game, 830, 340);
        toucan_4 = new EnemyToucan(320, game, 900, 270);

        ghost1 = new EnemyGhost(320, game, 1400, 400);

        coin1 = new Coins(320, game, 900, 1975);
        coin2 = new Coins(320, game, 970, 1975);
        coin3 = new Coins(320, game, 1180, 1400);
        coin4 = new Coins(320, game, 720, 400);

        

        floatingCoin1 = new FloatingCoins(320, game, 820, 650);
        floatingCoin2 = new FloatingCoins(320, game, 855, 685);
        floatingCoin3 = new FloatingCoins(320, game, 880, 730);
        floatingCoin4 = new FloatingCoins(320, game, 1522, 610);
        floatingCoin5 = new FloatingCoins(320, game, 2275, 780);
        floatingCoin6 = new FloatingCoins(320, game, 1725, 2500);
        floatingCoin7 = new FloatingCoins(320, game, 1825, 2500);
        floatingCoin8 = new FloatingCoins(320, game, 1925, 2500);
        floatingCoin9 = new FloatingCoins(320, game, 2025, 2500);
        floatingCoin10 = new FloatingCoins(320, game, 2125, 2500);
        floatingCoin11 = new FloatingCoins(320, game, 2225, 2500);
        floatingCoin12 = new FloatingCoins(320, game, 2325, 2500);
        floatingCoin13 = new FloatingCoins(320, game, 2425, 2500);
        floatingCoin14 = new FloatingCoins(320, game, 1100, 300);
        floatingCoin15 = new FloatingCoins(320, game, 1100, 350);

        treeBranch1 = new TreeBranch(320, game, 704, 2294);
        treeBranch2 = new TreeBranch2(320, game, 928, 2332);
        treeBranch3 = new TreeBranch2(320, game, 1216, 1502);
        treeBranch4 = new TreeBranch7(320, game, 496, 960);
        treeBranch5 = new TreeBranch7(320, game, 496, 900);
        treeBranch6 = new TreeBranch7(320, game, 496, 826);
        treeBranch7 = new TreeBranch3(320, game, 720, 500);
        treeBranch8 = new TreeBranch4(320, game, 1394,561);
        treeBranch9 = new TreeBranch5(320, game, 1648, 944);
        treeBranch10 = new TreeBranch6(320, game, 1535, 1233);
        treeBranch11 = new TreeBranch6(320, game, 1900, 1233);
        treeBranch12 = new TreeBranch6(320, game, 2030, 1892);
        treeBranch13 = new TreeBranch7(320, game, 1791, 1782);
        // treeBranch14 = new TreeBranch6(320, game, 1826, 1040);
        // treeBranch15 = new TreeBranch6(320, game, 2240, 1040);
        // treeBranch16 = new TreeBranch6(320, game, 1632, 1040);
        treeBranch17 = new TreeBranch9(320, game, 1120, 690);

        _ladder1 = new Ladder3(320, game, 2545, 1332);
        _ladder2 = new Ladder3(320, game, 2510, 1120);
        _spikez1 = new Spikez(320, game, 1670, 1797);

        vine_1 = new HangingVine(320, game, 1860, 1405);
        vine_2 = new HangingVine2(320, game, 1690, 1540);
        vine_3 = new HangingVine3(320, game, 1467, 1735);

        stone_1 = new Stone1(320, game, 2257, 2320)

        tree_trunk1 = new TreeTrunk1(320, game, 2384, 1450);
        tree_trunk2 = new TreeTrunk1(320, game, 2384, 1349);
        tree_trunk3 = new TreeTrunk1(320, game, 2384, 1850);

        _trunk1 = new TreeTrunk2(320, game, 1154, 1048);

       


        spring1 = new SpringJump(320, game, 1104, 2160);
        spring2 = new SpringJump(320, game, 990, 1008);
        spring3 = new SpringJump(320, game, 561, 1008);
        spring4 = new SpringJump(320, game, 1330, 1232);
        spring5 = new SpringJump(320, game, 900, 530);
        spring6 = new SpringJump(320, game, 2320, 1200);
        spring7 = new SpringJump(320, game, 2320, 1860);
        spring8 = new SpringJump(320, game, 1824,1860);
        spring9 = new SpringJump(320, game, 1650,2544);
        spring10 = new SpringJump(320, game, 2545,2542);
        spring11 = new SpringJump(320, game, 2480,2288);

        _spike1 = new Spikes(320, game, 1296, 2545);
        _spike2 = new Spikes(320, game, 1328, 2545);
        _spike3 = new Spikes(320, game, 1360, 2545);
        _spike4 = new Spikes(320, game, 2160, 912);
        _spike5 = new Spikes(320, game, 2128, 912);
        _spike6 = new Spikes(320, game, 2096, 912);
        _spike7 = new Spikes(320, game, 815, 880);

        


        

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

        coinCollection = game.add.text(700,1800, 'Coins: 0', {font: "30px Arial", fill: "#000000"});
        coinCollection.fixedToCamera = true;
        coinCollection.cameraOffset.setTo(100, 100);
        
        enemyHit = game.add.text(200, 1800, 'Score: 0', {font: "30px Arial", fill: "#000000"});
        enemyHit.fixedToCamera = true;
        enemyHit.cameraOffset.setTo(300, 100);
        // livesLeft = game.add.text(350, 1800, 'Lives Left: 10', {font: "30px Arial", fill: "#ffa500"});

        // var t = game.add.text(200, 500, "this text is fixed to the camera", { font: "32px Arial", fill: "#ffffff", align: "center" });
            
            
       

    },

    update:function() {

        
        // if(player.body.y > 100 && player.body.x < 700) {
        //     // player.dead = false;
        //     // player.reset(100, 2400);
        //     player.game.state.restart();
        //     // player.body.velocity.x = playerSpeed;
        // };
        
        // this.background.tilePosition.x = 0.5;

        enemy1.yeti.animations.play('left');
        enemy2.yeti.animations.play('left');
        enemy3.yeti.animations.play('right');
        ghost1.ghost.animations.play('left');
        coin1.coin.animations.play('right');
        coin2.coin.animations.play('right');
        coin3.coin.animations.play('right');
        coin4.coin.animations.play('right');
        coin4.coin.animations.play('right');
        floatingCoin1.coinz.animations.play('right');
        floatingCoin2.coinz.animations.play('right');
        floatingCoin3.coinz.animations.play('right');
        floatingCoin4.coinz.animations.play('right');
        floatingCoin5.coinz.animations.play('right');
        floatingCoin6.coinz.animations.play('right');
        floatingCoin7.coinz.animations.play('right');
        floatingCoin8.coinz.animations.play('right');
        floatingCoin9.coinz.animations.play('right');
        floatingCoin10.coinz.animations.play('right');
        floatingCoin11.coinz.animations.play('right');
        floatingCoin12.coinz.animations.play('right');
        floatingCoin13.coinz.animations.play('right');
        floatingCoin14.coinz.animations.play('right');
        floatingCoin15.coinz.animations.play('right');
        toucan_1.toucan.animations.play('left');
        toucan_2.toucan.animations.play('left');
        toucan_3.toucan.animations.play('left');
        toucan_4.toucan.animations.play('left');

        bear_1.bear.animations.play('left');
        bear_2.bear.animations.play('left');
        
        

        this.physics.arcade.collide(player, layer);
        
        // player.angle += 1;

        onLadder = false;

        onSpring = false;
        
        onEndZone = false;

        player.body.gravity.y = gravity;

        this.physics.arcade.collide(player, treeBranch1.ledge);
        this.physics.arcade.collide(player, treeBranch2.ledge);
        this.physics.arcade.collide(player, treeBranch3.ledge);
        this.physics.arcade.collide(player, treeBranch4.ledge);
        this.physics.arcade.collide(player, treeBranch4.ledge7);
        this.physics.arcade.collide(player, treeBranch5.ledge7);

        this.physics.arcade.collide(player, treeBranch6.ledge7);
        this.physics.arcade.collide(player, treeBranch7.ledge3);
        this.physics.arcade.collide(player, treeBranch8.ledge4);
        this.physics.arcade.collide(player, treeBranch9.ledge5);
        this.physics.arcade.collide(player, treeBranch10.ledge6);
        this.physics.arcade.collide(player, treeBranch11.ledge6);
        this.physics.arcade.collide(player, treeBranch12.ledge6);
        this.physics.arcade.collide(player, treeBranch13.ledge7);
        this.physics.arcade.collide(player, treeBranch17.ledge9);
        // this.physics.arcade.collide(player, treeBranch15.ledge6);
        this.physics.arcade.collide(player, _trunk1.trunk2);

        this.physics.arcade.collide(player, tree_trunk1.trunk);
        this.physics.arcade.collide(player, tree_trunk2.trunk);
        this.physics.arcade.collide(player, tree_trunk3.trunk);

        this.physics.arcade.collide(player, stone_1.stone);

        this.physics.arcade.collide(coin1.coin, treeBranch2.ledge);
        this.physics.arcade.collide(coin2.coin, treeBranch2.ledge);
        this.physics.arcade.collide(coin3.coin, treeBranch3.ledge);
        this.physics.arcade.collide(coin4.coin, treeBranch7.ledge3);

        this.physics.arcade.collide(enemy1.yeti, treeBranch1.ledge);
        this.physics.arcade.collide(enemy2.yeti, treeBranch8.ledge4);
        this.physics.arcade.collide(enemy3.yeti, treeBranch9.ledge5);

        this.physics.arcade.collide(bear_1.bear, stone_1.stone);
        this.physics.arcade.collide(bear_2.bear, stone_1.stone);

        
        this.physics.arcade.collide(_spike1.spike, player, hitSpike);
        this.physics.arcade.collide(_spike2.spike, player, hitSpike);
        this.physics.arcade.collide(_spike3.spike, player, hitSpike);
        this.physics.arcade.collide(_spike4.spike, player, hitSpike);
        this.physics.arcade.collide(_spike5.spike, player, hitSpike);
        this.physics.arcade.collide(_spike6.spike, player, hitSpike);
        this.physics.arcade.collide(_spike7.spike, player, hitSpike);

        
        

        //check how far baddie has travelled. If past maximum amount then switch direction
        if (Math.abs(enemy1.yeti.x - enemy1.yeti.previousX) >= enemy1.yeti.maxDistance) {
            switchDirection(enemy1.yeti);
        }

        if (Math.abs(enemy2.yeti.x - enemy2.yeti.previousX) >= enemy2.yeti.maxDistance) {
            switchDirection3(enemy2.yeti);
        }
        if (Math.abs(enemy3.yeti.x - enemy3.yeti.previousX2) >= enemy3.yeti.maxDistance2) {
            switchDirection4(enemy3.yeti);
        }
        if (Math.abs(ghost1.ghost.x - ghost1.ghost.previousX) >= ghost1.ghost.maxDistance) {
            switchDirection2(ghost1.ghost);
        }
        if (Math.abs(bear_1.bear.x - bear_1.bear.previousX) >= bear_1.bear.maxDistance) {
            switchDirection5(bear_1.bear);
        }
        if (Math.abs(bear_2.bear.x - bear_2.bear.previousX) >= bear_2.bear.maxDistance) {
            switchDirection6(bear_2.bear);
        }
        this.physics.arcade.overlap(player, enemy1.yeti, hitYeti);
        this.physics.arcade.overlap(player, enemy2.yeti, hitYeti2);
        this.physics.arcade.overlap(player, enemy3.yeti, hitYeti3);

        // this.physics.arcade.overlap(player, ghost1.ghost, hitGhost);

        this.physics.arcade.overlap(player, toucan_1.toucan, toucanHit1);
        this.physics.arcade.overlap(player, toucan_2.toucan, toucanHit2);
        this.physics.arcade.overlap(player, toucan_3.toucan, toucanHit3);
        this.physics.arcade.overlap(player, toucan_4.toucan, toucanHit4);

        this.physics.arcade.overlap(player, bear_1.bear, bearHit1);
        this.physics.arcade.overlap(player, bear_2.bear, bearHit2);
        
        this.physics.arcade.overlap(player, ladders, isOnLadder);

        this.physics.arcade.overlap(player, spring1.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring2.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring3.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring4.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring5.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring6.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring7.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring8.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring9.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring10.SpringJump, isOnSpring);
        this.physics.arcade.overlap(player, spring11.SpringJump, isOnSpring);

        this.physics.arcade.overlap(player, coin1.coin);
        this.physics.arcade.overlap(player, coin2.coin);
        this.physics.arcade.overlap(player, coin3.coin);
        this.physics.arcade.overlap(player, coin4.coin);

        this.physics.arcade.overlap(player, floatingCoin1.coinz);
        this.physics.arcade.overlap(player, floatingCoin2.coinz);
        this.physics.arcade.overlap(player, floatingCoin3.coinz);
        this.physics.arcade.overlap(player, floatingCoin4.coinz);

        this.physics.arcade.overlap(vine_1.vine, player);
        this.physics.arcade.overlap(vine_2.vine, player);
        this.physics.arcade.overlap(vine_3.vine, player);

        this.physics.arcade.overlap(_ladder1.ladder3, player);
        this.physics.arcade.overlap(_ladder2.ladder3, player);

        this.physics.arcade.overlap(_spikez1.spike2, player);

        

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
            
                jumpSound.play();
                player.body.velocity.y = -600;
                jumpTimer = this.time.now + 750;
            }
    
            // if(onLadder) {
            //     if(controls.up.isDown) {
            //         player.body.velocity.y = -playerSpeed/2;
            //     }
            //     if(controls.down.isDown) {
            //         player.body.velocity.y = playerSpeed/2;
            //     }
            //     if(!controls.up.isDown && !controls.down.isDown)  {
            //         player.body.gravity.y = 0;
            //         player.body.velocity.y = 0;
            //         // player.body.bounce.y = 0.9;
            //     }
            // };

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

        if(checkOverlap(vine_1.vine, player)) {
            this.world.bringToTop(player);
            player.animations.play('vine');
            if(controls.up.isDown) {
                player.body.velocity.y = -playerSpeed/2;
            }
            if(controls.down.isDown) {
                player.body.velocity.y = playerSpeed/2;
            }
            if(!controls.up.isDown && !controls.down.isDown)  {
                player.body.gravity.y = 10;
                player.body.velocity.y = 4;
             }
        }

        if(checkOverlap(vine_2.vine2, player)) {
            this.world.bringToTop(player);
            player.animations.play('vine');
            if(controls.up.isDown) {
                player.body.velocity.y = -playerSpeed/2;
            }
            if(controls.down.isDown) {
                player.body.velocity.y = playerSpeed/2;
            }
            if(!controls.up.isDown && !controls.down.isDown)  {
                player.body.gravity.y = 0;
                player.body.velocity.y = 0;
             }
        }
        if(checkOverlap(vine_3.vine3, player)) {
            this.world.bringToTop(player);
            player.animations.play('vine');
            if(controls.up.isDown) {
                player.body.velocity.y = -playerSpeed/2;
            }
            if(controls.down.isDown) {
                player.body.velocity.y = playerSpeed/2;
            }
            if(!controls.up.isDown && !controls.down.isDown)  {
                player.body.gravity.y = 0;
                player.body.velocity.y = 0;
             }
        }

        if(checkOverlap(_ladder1.ladder3, player)) {
            this.world.bringToTop(player);
            player.animations.play('vine');
            if(controls.up.isDown) {
                player.body.velocity.y = -playerSpeed/2;
            }
            if(controls.down.isDown) {
                player.body.velocity.y = playerSpeed/2;
            }
            if(!controls.up.isDown && !controls.down.isDown)  {
                player.body.gravity.y = 0;
                player.body.velocity.y = 0;
             }
        }
        if(checkOverlap(_ladder2.ladder3, player)) {
            this.world.bringToTop(player);
            player.animations.play('vine');
            if(controls.up.isDown) {
                player.body.velocity.y = -playerSpeed/2;
            }
            if(controls.down.isDown) {
                player.body.velocity.y = playerSpeed/2;
            }
            if(!controls.up.isDown && !controls.down.isDown)  {
                player.body.gravity.y = 0;
                player.body.velocity.y = 0;
             }
        }

        


        
        

        if(checkOverlap(player, coin1.coin)) {
            

            if(!coin1.coin.hit && !player.dead) {

                this.testCoinSound1.play();

                coin1.coin.hit = true;
                coin1.coin.body.velocity.y = -100;

                var tween = this.add.tween(coin1.coin).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(coin1.coin.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins: ' + coins;

            };


        }

        if(checkOverlap(player, coin2.coin)) {

            
            

            if(!coin2.coin.hit && !player.dead) {

                this.testCoinSound1.play();

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

        if(checkOverlap(player, coin3.coin)) {
            

            if(!coin3.coin.hit && !player.dead) {

                this.testCoinSound1.play();

                coin3.coin.hit = true;
                coin3.coin.body.velocity.y = -100;

                var tween = this.add.tween(coin3.coin).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(coin3.coin.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }

        if(checkOverlap(player, coin4.coin)) {
            

            if(!coin4.coin.hit && !player.dead) {

                this.testCoinSound1.play();

                coin4.coin.hit = true;
                coin4.coin.body.velocity.y = -100;

                var tween = this.add.tween(coin4.coin).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(coin4.coin.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }

        if(checkOverlap(player, floatingCoin1.coinz)) {
            

            if(!floatingCoin1.coinz.hit && !player.dead) {

                floatingCoin1.coinz.hit = true;
               floatingCoin1.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin1.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin1.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }

        if(checkOverlap(player, floatingCoin2.coinz)) {
            

            if(!floatingCoin2.coinz.hit && !player.dead) {

                floatingCoin2.coinz.hit = true;
               floatingCoin2.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin2.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin2.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }

        if(checkOverlap(player, floatingCoin3.coinz)) {
            

            if(!floatingCoin3.coinz.hit && !player.dead) {

                floatingCoin3.coinz.hit = true;
               floatingCoin3.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin3.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin3.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;
            };
        }
        if(checkOverlap(player, floatingCoin4.coinz)) {
            

            if(!floatingCoin4.coinz.hit && !player.dead) {

                floatingCoin4.coinz.hit = true;
               floatingCoin4.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin4.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin4.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;
            };
        }
        if(checkOverlap(player, floatingCoin5.coinz)) {
            

            if(!floatingCoin5.coinz.hit && !player.dead) {

                floatingCoin5.coinz.hit = true;
               floatingCoin5.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin5.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin5.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;
            };
        }
        if(checkOverlap(player, floatingCoin6.coinz)) {
            

            if(!floatingCoin6.coinz.hit && !player.dead) {

                floatingCoin6.coinz.hit = true;
               floatingCoin6.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin6.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin6.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin7.coinz)) {
            

            if(!floatingCoin7.coinz.hit && !player.dead) {

                floatingCoin7.coinz.hit = true;
                floatingCoin7.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin7.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin7.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin8.coinz)) {
            

            if(!floatingCoin8.coinz.hit && !player.dead) {

                floatingCoin8.coinz.hit = true;
                floatingCoin8.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin8.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin8.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin9.coinz)) {
            

            if(!floatingCoin9.coinz.hit && !player.dead) {

                floatingCoin9.coinz.hit = true;
                floatingCoin9.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin9.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin9.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin10.coinz)) {
            

            if(!floatingCoin10.coinz.hit && !player.dead) {

                floatingCoin10.coinz.hit = true;
                floatingCoin10.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin10.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin10.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin11.coinz)) {
            

            if(!floatingCoin11.coinz.hit && !player.dead) {

                floatingCoin11.coinz.hit = true;
                floatingCoin11.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin11.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin11.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin12.coinz)) {
            

            if(!floatingCoin12.coinz.hit && !player.dead) {

                floatingCoin12.coinz.hit = true;
                floatingCoin12.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin12.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin12.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin13.coinz)) {
            

            if(!floatingCoin13.coinz.hit && !player.dead) {

                floatingCoin13.coinz.hit = true;
                floatingCoin13.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin13.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin13.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin14.coinz)) {
            

            if(!floatingCoin14.coinz.hit && !player.dead) {

                floatingCoin14.coinz.hit = true;
                floatingCoin14.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin14.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin14.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
                //when our fade tween is complete call the function killcoin
                tween.onComplete.add(removeSprite);

                coins+= 1;
                coinCollection.text = 'Coins' + coins;

            };


        }
        if(checkOverlap(player, floatingCoin15.coinz)) {
            

            if(!floatingCoin15.coinz.hit && !player.dead) {

                floatingCoin15.coinz.hit = true;
                floatingCoin15.coinz.body.velocity.y = -100;

               this.testCoinSound1.play();

                var tween = this.add.tween(floatingCoin15.coinz).to( { alpha: 0, angle: 360 }, 500, "Linear", true);
                //animate the scale property of our coin to make it halve in size
                this.add.tween(floatingCoin15.coinz.scale).to( { x: .5, y: .5 }, 500, "Linear", true);
            
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

        // ====================== SPRINGS ==================================

        if(checkOverlap(player, spring1.spring)) {
            player.body.velocity.y = +playerSpeed*-7.7;

            this.testSpringSound.play(); 
        }
        if(checkOverlap(player, spring2.spring)) {
            // spring2.spring.body.acceleration.x = -20;
            // player.body.velocity.x = +playerSpeed*-30 ;
            this.testSpringSound4.play();

            player.body.acceleration.x = +playerSpeed * -180;
            this.time.events.add(Phaser.Timer.SECOND *.65 , function() {

                player.body.acceleration.x = 0;
            })
            // spring2.spring.body.acceleration.x = 0;

            // spring2.spring.body.acceleration.x = +playerSpeed*2;
            // this.time.events.add(Phaser.Timer.SECOND *.3 , function() {

            //     spring2.spring.body.acceleration.x  = 0;
            
            // })  
        }

        if(checkOverlap(player, spring3.spring)) {
            player.body.velocity.y = +playerSpeed*-4;
        }

        if(checkOverlap(player, spring4.spring)) {

            // spring2.spring.body.acceleration.x = -20;
            // player.body.velocity.x = -playerSpeed*10 ;
            this.testSpringSound4.play();
            
            player.body.acceleration.x = +playerSpeed * 380;
            
            this.time.events.add(Phaser.Timer.SECOND *.7 , function() {

                player.body.acceleration.x = 0;
            })
        }

        if(checkOverlap(player, spring5.spring)) {
            this.testSpringSound4.play(); 
            player.body.velocity.y = +playerSpeed*-2;
        }

        if(checkOverlap(player, spring6.spring)) {
            player.body.velocity.y = +playerSpeed*6;

            this.testSpringSound4.play();

            player.body.acceleration.x = +playerSpeed * 360;
            
            this.time.events.add(Phaser.Timer.SECOND *2 , function() {

                player.body.acceleration.x = 0;
            })
        }

        if(checkOverlap(player, spring7.spring)) {
            // spring2.spring.body.acceleration.x = -20;
            // player.body.velocity.x = +playerSpeed*-30 ;
            this.testSpringSound4.play();
            player.body.acceleration.x = +playerSpeed * -180;
            this.time.events.add(Phaser.Timer.SECOND *.65 , function() {

                player.body.acceleration.x = 0;
            
            })
        }

        if(checkOverlap(player, spring8.spring)) {
            player.body.velocity.y = +playerSpeed*-4.5;

            this.testSpringSound4.play(); 
        }

        if(checkOverlap(player, spring9.spring)) {
            // spring2.spring.body.acceleration.x = -20;
            // player.body.velocity.x = -playerSpeed*10 ;

            
            this.testSpringSound4.play();

            
            player.body.acceleration.x = +playerSpeed * 320;
            
            this.time.events.add(Phaser.Timer.SECOND *.7 , function() {

                player.body.acceleration.x = 0;
            
            })
           
            
        }

        if(checkOverlap(player, spring10.spring)) {
            player.body.velocity.y = +playerSpeed*-9;

            this.testSpringSound4.play();

            

            
        }
        if(checkOverlap(player, spring11.spring)) {
            // player.body.velocity.y = -playerSpeed*6;

            player.body.velocity.y = +playerSpeed*-8.8;

            this.testSpringSound4.play();
        }

        if(checkOverlap(player, _spikez1.spike2)) {
            
            bushSound.play();
            restartGame2();

            
        }



        if(checkOverlap(player, endZone)) {

            console.log('you win');

            winSound.play();

            player.game.state.restart();
        }
        
    },

    

    resetPlayer: function() {

        this.testCoinSound1.play();
        coins-= 1;
        coinCollection.text = 'Coins' + coins;

        
    },

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

    
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
};

// function hitGhost(player, ghost) {
    
//     // this.resetPlayer();
//     if(ghost.body.touching.bottom && !ghost.hit) {

//         testMonkeySound1.play();

//         ghost.hit = true;
//         ghost.body.velocity.y = -100;
//         ghost.body.velocity.x = 0;
        
//         player.body.velocity.y = 0;

//         var yetiTween = ghost1.ghost.game.add.tween(ghost),
//         yetiScaleTween = ghost1.ghost.game.add.tween(ghost.scale);

//         yetiTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
//         yetiScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

//         yetiTween.onComplete.add(removeSprite);

//         yetiScaleTween.start();
//         yetiTween.start();

//         score =+ 10;
//         enemyHit.text = 'Score: ' + score;

//     }
//     else {

        

//         player.dead = false;
//         player.body.velocity.y =-playerSpeed;
//         player.body.velocity.x = 0;

//         var playerTween = player.game.add.tween(player);
//         playerScaleTween = player.game.add.tween(player.scale);

//         // assign tween values
//         playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
//         playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

//         //when scale tween is finished, restart game
//         playerTween.onComplete.add(restartGame);
        

//         //start the tweens
//         playerScaleTween.start();
//         playerTween.start();
        
//     }
// };

function hitYeti(player, yeti) {
    
    // this.resetPlayer();
    if(yeti.body.touching.up && !yeti.hit) {

        testMonkeySound1.play();

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
        playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};
function hitYeti2(player, yeti) {

    // this.resetPlayer();
    if(yeti.body.touching.up && !yeti.hit) {
        testMonkeySound1.play();

        yeti.hit = true;
        yeti.body.velocity.y = -100;
        yeti.body.velocity.x = 0;
        
        player.body.velocity.y = -600;

        var yetiTween = enemy2.yeti.game.add.tween(yeti),
        yetiScaleTween = enemy2.yeti.game.add.tween(yeti.scale);

        yetiTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
        yetiScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        yetiTween.onComplete.add(removeSprite);

        yetiScaleTween.start();
        yetiTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        damageSound1.play();

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(resetPlayer);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};
function hitYeti3(player, yeti) {

    // this.resetPlayer();
    if(yeti.body.touching.up && !yeti.hit) {
        testMonkeySound1.play();
        yeti.hit = true;
        yeti.body.velocity.y = -100;
        yeti.body.velocity.x = 0;
        
        player.body.velocity.y = -600;

        var yetiTween = enemy3.yeti.game.add.tween(yeti),
        yetiScaleTween = enemy3.yeti.game.add.tween(yeti.scale);

        yetiTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
        yetiScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        yetiTween.onComplete.add(removeSprite);

        yetiScaleTween.start();
        yetiTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {
        damageSound1.play();
        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(resetPlayer);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};

function toucanHit1(player, toucan) {
    
    // this.resetPlayer();
    if(toucan.body.touching.up && !toucan.hit) {

        toucanSound.play();

        toucan.hit = true;
        toucan.body.velocity.y = -100;
        toucan.body.velocity.x = 0;
        
        player.body.velocity.y = -600;

        var bearTween = toucan_1.toucan.game.add.tween(toucan),
        bearScaleTween =  toucan_1.toucan.game.add.tween(toucan.scale);

        bearTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
        bearScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        bearTween.onComplete.add(removeSprite);

        bearScaleTween.start();
        bearTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        damageSound1.play();

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame2);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};
function toucanHit2(player, toucan) {
    
    // this.resetPlayer();
    if(toucan.body.touching.up && !toucan.hit) {

        toucanSound.play();

        toucan.hit = true;
        toucan.body.velocity.y = 0;
        toucan.body.velocity.x = 0;
        
        player.body.velocity.y = +playerSpeed * -3.5;

        var bearTween = toucan_2.toucan.game.add.tween(toucan),
        bearScaleTween =  toucan_2.toucan.game.add.tween(toucan.scale);

        bearTween.to({ alpha: 0, angle: 0}, 0, Phaser.Easing.Linear.None);
        bearScaleTween.to({ x: .5, y:.5 }, 20, Phaser.Easing.Linear.None);

        bearTween.onComplete.add(removeSprite);

        bearScaleTween.start();
        bearTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        damageSound1.play();

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 500, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame2);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};
function toucanHit3(player, toucan) {
    
    // this.resetPlayer();
    if(toucan.body.touching.up && !toucan.hit) {

        toucanSound.play();

        toucan.hit = true;
        toucan.body.velocity.y = 0;
        toucan.body.velocity.x = 0;
        
        player.body.velocity.y = +playerSpeed * -2.5;

        var bearTween = toucan_3.toucan.game.add.tween(toucan),
        bearScaleTween =  toucan_3.toucan.game.add.tween(toucan.scale);

        bearTween.to({ alpha: 0, angle: 0}, 0, Phaser.Easing.Linear.None);
        bearScaleTween.to({ x: .5, y:.5 }, 20, Phaser.Easing.Linear.None);

        bearTween.onComplete.add(removeSprite);

        bearScaleTween.start();
        bearTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        damageSound1.play();

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 500, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame3);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};
function toucanHit4(player, toucan) {
    
    // this.resetPlayer();
    if(toucan.body.touching.up && !toucan.hit) {

        toucanSound.play();

        toucan.hit = true;
        toucan.body.velocity.y = 0;
        toucan.body.velocity.x = 0;
        
        player.body.velocity.y = +playerSpeed * -0.7;

        var bearTween = toucan_4.toucan.game.add.tween(toucan),
        bearScaleTween =  toucan_4.toucan.game.add.tween(toucan.scale);

        bearTween.to({ alpha: 0, angle: 0}, 0, Phaser.Easing.Linear.None);
        bearScaleTween.to({ x: .5, y:.5 }, 20, Phaser.Easing.Linear.None);

        bearTween.onComplete.add(removeSprite);

        bearScaleTween.start();
        bearTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        damageSound1.play();

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 500, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame3);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};

function bearHit1(player, bear) {
    
    // this.resetPlayer();
    if(bear.body.touching.up && !bear.hit) {

        bearSound.play();

        bear.hit = true;
        bear.body.velocity.y = -100;
        bear.body.velocity.x = 0;
        
        player.body.velocity.y = -600;

        var yetiTween = bear_1.bear.game.add.tween(bear),
        yetiScaleTween = bear_1.bear.game.add.tween(bear.scale);

        yetiTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
        yetiScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        yetiTween.onComplete.add(removeSprite);

        yetiScaleTween.start();
        yetiTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        
        damageSound1.play();
        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame2);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};
function bearHit2(player, bear) {
    
    // this.resetPlayer();
    if(bear.body.touching.up && !bear.hit) {

        bearSound.play();

        bear.hit = true;
        bear.body.velocity.y = -100;
        bear.body.velocity.x = 0;
        
        player.body.velocity.y = -600;

        var yetiTween = bear_2.bear.game.add.tween(bear),
        yetiScaleTween = bear_2.bear.game.add.tween(bear.scale);

        yetiTween.to({ alpha: 0, angle: 360}, 100, Phaser.Easing.Linear.None);
        yetiScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        yetiTween.onComplete.add(removeSprite);

        yetiScaleTween.start();
        yetiTween.start();

        score += 10;
        enemyHit.text = 'Score: ' + score;

    }
    else {

        damageSound1.play();

        player.dead = false;
        player.body.velocity.y =-playerSpeed;
        player.body.velocity.x = 0;

        var playerTween = player.game.add.tween(player);
        playerScaleTween = player.game.add.tween(player.scale);

        // assign tween values
        playerTween.to({ alpha: 1,  angle: 360}, 200, Phaser.Easing.Linear.None);
        playerScaleTween.to({ x: .5, y:.5 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        playerTween.onComplete.add(restartGame2);
        

        //start the tweens
        playerScaleTween.start();
        playerTween.start();
        
    }
};

function hitSpike() {
    coinCollection.text = 'Coins' + coins--;

    spike.play();
    // this.world.bringToTop(player);
    // player.animations.play('vine');
    if(controls.up.isDown) {
        player.body.velocity.y = -playerSpeed*2;
    }
    if(controls.down.isDown) {
        player.body.velocity.y = playerSpeed*2;
    }
    if(!controls.up.isDown && !controls.down.isDown)  {
        player.body.gravity.y = 0;
        player.body.velocity.y = +playerSpeed*-1.8;
     }

}





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
function switchDirection2() {
    //reverse velocity so baddie moves are same speed but in opposite direction
    ghost1.ghost.body.velocity.x *= -1;
    //reset count
    ghost1.ghost.previousX = ghost1.ghost.x;
 };

 function switchDirection3() {
    //reverse velocity so baddie moves are same speed but in opposite direction
    enemy2.yeti.body.velocity.x *= -1;
    //reset count
    enemy2.yeti.previousX = enemy2.yeti.x;
   
 };
 function switchDirection4() {
    //reverse velocity so baddie moves are same speed but in opposite direction
    enemy3.yeti.body.velocity.x *= -1;
    //reset count
    enemy3.yeti.previousX2 = enemy3.yeti.x;
 };

 function switchDirection5() {
    //reverse velocity so baddie moves are same speed but in opposite direction
    bear_1.bear.body.velocity.x *= -1;
    //reset count
    bear_1.bear.previousX = bear_1.bear.x;
 };
 function switchDirection6() {
    //reverse velocity so baddie moves are same speed but in opposite direction
    bear_2.bear.body.velocity.x *= -1;
    //reset count
    bear_2.bear.previousX = bear_2.bear.x;
 };
 

function restartGame() {

   
    player.reset(100, 2200);
    player.dead = false;
    var playerTween3 = player.game.add.tween(player),
        playerScaleTween3 = player.game.add.tween(player.scale);

        //assign tween values
        playerTween3.to({ alpha: 1,  angle: 360}, 100, Phaser.Easing.Linear.None);
        playerScaleTween3.to({ x: 1, y:1 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        // playerScaleTween2.onComplete.add(resetPlayer);

        //start the tweens
        playerScaleTween3.start();
        playerTween3.start();
    

    
        
};
function restartGame2() {

   
    player.reset(1340, 1000);
    player.dead = false;
    var playerTween3 = player.game.add.tween(player),
        playerScaleTween3 = player.game.add.tween(player.scale);

        //assign tween values
        playerTween3.to({ alpha: 1,  angle: 360}, 100, Phaser.Easing.Linear.None);
        playerScaleTween3.to({ x: 1, y:1 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        // playerScaleTween2.onComplete.add(resetPlayer);

        //start the tweens
        playerScaleTween3.start();
        playerTween3.start();
    

    
        
};

function restartGame3() {

   
    player.reset(1064, 700);
    player.dead = false;
    var playerTween3 = player.game.add.tween(player),
        playerScaleTween3 = player.game.add.tween(player.scale);

        //assign tween values
        playerTween3.to({ alpha: 1,  angle: 360}, 100, Phaser.Easing.Linear.None);
        playerScaleTween3.to({ x: 1, y:1 }, 500, Phaser.Easing.Linear.None);

        //when scale tween is finished, restart game
        // playerScaleTween2.onComplete.add(resetPlayer);

        //start the tweens
        playerScaleTween3.start();
        playerTween3.start();
    

    
        
};

function resetPlayer() {
    player.reset(1250, 200);
    player.dead = false;
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

}


