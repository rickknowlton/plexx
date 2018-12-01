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

        this.load.image('yeti', '/images/yeti.png', 32, 32);

        this.load.image('background', '/images/game_background_1.png');

        this.load.image('banana', '/images/banana.png');

        this.load.spritesheet('coin', '/images/coin.png', 23, 24);

        this.load.image('ladder', '/images/ladder.png');

        this.load.image('spring', '/images/spring.png', 32, 32);

        this.load.image('ground', '/images/platform.png');

        this.load.image('ground2', '/images/platform2.png');

        this.load.image('ground3', '/images/platform3.png');

        this.load.image('endZone', '/images/endZone.png');

        // Level 2
        // this.load.tilemap('map2', '/images/test_level.csv' );


    },

    create:function() {

        this.state.start('Level1')

    }
}