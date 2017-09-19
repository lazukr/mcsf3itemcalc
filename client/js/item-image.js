var ItemImage = function(game, x, y, key, frame) {

    if (typeof frame === 'undefined') {
        frame = 0;
    }

    Phaser.Image.call(this, game, x, y, key, frame);
    this.data = game.ITEM_LIST[key];
    this.name = this.data.name;
    this.key = key;

};

ItemImage.prototype = Object.create(Phaser.Image.prototype);
ItemImage.prototype.constructor = ItemImage;