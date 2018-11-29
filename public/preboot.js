window.onload = function() {
    var game = new Phaser.Game(600, 600, Phaser.AUTO, 'plexx-game');

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;

    game.state.add('Boot', Game.Boot);
    game.state.add('Preloader', Game.Preloader);
    game.state.add('MainMenu', Game.MainMenu);
    game.state.add('Level1', Game.Level1);

    game.state.start('Boot');


}