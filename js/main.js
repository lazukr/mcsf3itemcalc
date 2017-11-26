var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', {
    create:create
});

function create() {

    game.state.add('boot', Boot);
    game.state.add('load', Load);
    game.state.add('menu', Menu);
    game.state.start('boot');
};