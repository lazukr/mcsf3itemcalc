var Load = function(game) {};

Load.prototype = {
    preload: function() {
        // loading image assets and creating the Item data.
        game.ITEM_LIST = {};
        for (var key in ITEM_DATA) {
            game.load.image(key, './assets/' + key + '.png');
            game.ITEM_LIST[key] = new Item(ITEM_DATA, key);
        }

    },

    create: function() {

        game.state.start('menu');

    }
}