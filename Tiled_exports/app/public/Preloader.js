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

        this.load.tilemap('map', '/images/Level1.csv' );

       
        this.load.image('tileset','/images/completeTileset.png');

        this.load.spritesheet('bad_dude','/images/bad_dude.png', 32, 48);

        this.load.image('yeti', '/images/yeti.png', 32, 32);

        this.load.image('bullet', '/images/bullet.png');


    },

    create:function() {

        this.state.start('Level1')

    }
}