var Load = function(game) {};

Load.prototype = {

    preload: function() {
        game.load.json('item', '/js/item.json');

    },

    create: function() {

        game.state.start('menu');

    }
}