var ItemGroup = function(game, clickable) {

    if (typeof clickable === 'undefined') {
        clickable = false;
    }

    Phaser.Group.call(this, game);

    this.classType = ItemImage;
    this.displayText;
    this.clickable = clickable;
    this.inputEnableChildren = true;

    this.onChildInputDown.add(function(item) {
        if (this.clickable) {
            item.tint = 0xAAAAFF;
        }
    }, this);
    this.onChildInputOver.add(function(item) {
        item.tint = 0xAAFFFF;
        item.width = 40;
        item.height = 40;
        this.bringToTop(item);
        if (this.displayText) {
            this.displayText.text = item.name;
        }
    }, this);
    this.onChildInputOut.add(function(item) {
        item.tint = 0xFFFFFF;
        item.width = 32;
        item.height = 32;
        if (this.displayText) {
            this.displayText.text = "";
        }
    }, this);
};

ItemGroup.prototype = Object.create(Phaser.Group.prototype);
ItemGroup.prototype.constructor = ItemGroup;