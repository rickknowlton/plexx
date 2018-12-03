Game.Preloader = function(game) {

    this.preloadBar = null;

};

Game.Preloader.prototype = {

    preload:function() {

        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');

        this.preloadBar.anchor.setTo(0.5, 0.5);

        this.time.advancedTiming = true;

        this.load.setPreloadSprite(this.preloadBar);

        // load assets


        // Level 1
        this.load.tilemap('map', '/images/new_level_layout.csv' );

       
       
        this.load.image('tileset','/images/new_tileset.png');

        this.load.spritesheet('bad_dude','/images/bad_dude.png', 32, 48);

        this.load.spritesheet('monkey','/images/monkey.png', 32, 32);

        this.load.spritesheet('ghost','/images/ghost.png', 32, 48);

        this.load.spritesheet('bear','/images/bear.png', 48, 32);

        this.load.spritesheet('toucan','/images/toucan.png', 40, 32);

        this.load.image('yeti', '/images/yeti.png', 32, 32);

        this.load.image('background', '/images/background3.png');

        this.load.image('banana', '/images/banana.png');

        this.load.spritesheet('coin', '/images/coin.png', 23, 24);

        this.load.image('ladder', '/images/ladder.png');

        this.load.image('ladder_3', '/images/ladder3.png');

        this.load.image('spring', '/images/spring.png', 32, 32);

        this.load.image('ground', '/images/platform.png');

        this.load.image('ground2', '/images/platform2.png');

        this.load.image('ground3', '/images/platform3.png');

        this.load.image('ground4', '/images/platform4.png');

        this.load.image('ground5', '/images/platform5.png');

        this.load.image('ground6', '/images/platform6.png');

        this.load.image('ground7', '/images/platform7.png');

        this.load.image('ground8', '/images/platform8.png');

        this.load.image('ground9', '/images/platform9.png');

        this.load.image('trunk1', '/images/trunk.png');

        this.load.image('trunk2', '/images/trunk2.png');

        this.load.image('vine_1', '/images/vine1.png');

        this.load.image('vine_2', '/images/vine2.png');

        this.load.image('vine_3', '/images/vine3.png');

        this.load.image('stone_1', '/images/stone1.png');

        this.load.image('spike', '/images/spike.png');

        this.load.image('spike2', '/images/spike2.png');



        this.load.image('endZone', '/images/endZone.png');

        // Level 2
        // this.load.tilemap('map2', '/images/test_level.csv' );

        this.load.audio('springSound', '/images/bounce1.wav');
        this.load.audio('springSound2', '/images/bounce2.wav');
        this.load.audio('springSound4', '/images/bounce4.wav');

        this.load.audio('coin1', '/images/coin1sound.wav');
        this.load.audio('testMonkeySound1', '/images/monkey.wav');
        this.load.audio('damage1', '/images/damage1.wav');
        this.load.audio('spike', '/images/sonic_spike.wav');
        this.load.audio('bearSound', '/images/bearSound.wav');
        this.load.audio('toucanSound', '/images/toucanSound.wav');
        this.load.audio('winSound', '/images/winSound.mp3');
        this.load.audio('bushSound', '/images/bush.wav');
        this.load.audio('jump1', '/images/jump1.wav');




    },

    create:function() {

        this.state.start('Level1')

    }
}