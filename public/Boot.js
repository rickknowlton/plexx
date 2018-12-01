var Game = {};

Game.Boot = function(game) {

};

Game.Boot.prototype = {

    init:function() {

        this.input.maxPointers = 1;

        this.state.disableVisibilityChange = true;
        
    },

    preload:function() {

        this.load.image('preloaderBar', '/images/preloader.png');
    },

    create:function() {

        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader');
    }
}