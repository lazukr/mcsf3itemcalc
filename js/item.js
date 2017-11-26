var Item = function(itemList, key) {

    this.sprite = key;
    this.name = key.split('_').join(' ');

    var JSONKey = itemList[key];

    for (var property in JSONKey) {
        this[property] = JSONKey[property];
    }
};

Item.prototype.constructor = Item;

// this runs the recursive function in order to get
// the basic materials needed to craft the item
Item.prototype.getFinalRecipe = function(itemList) {
    if (this.hasOwnProperty('craftable') && this.craftable) {
        if(this.hasOwnProperty('recipe')) {
            this.finalRecipe = {};
            this.getChildRecipe(itemList, this, this.recipe, this.amount);
        }
    }
};

Item.prototype.addToRecipe = function(item, amount) {
    // add to the final recipe list,
    // if it already exists, just add to it
    // if not, create it and set amount
    if(this.finalRecipe.hasOwnProperty(item)) {
        this.finalRecipe[item] += amount;
    } else {
        this.finalRecipe[item] = amount;
    }
};

Item.prototype.getChildRecipe = function(itemList, item, recipe, amountNeeded) {
    var currentItemRecipe = item;
    // gives you the minimal required materials to guarantee to make the item desired
    var currentAmountNeeded = Math.ceil(amountNeeded/currentItemRecipe.amount);
    for (var ingredient in recipe) {
        var currentItem = itemList[ingredient];
        if (currentItem.craftable) {
            // recursive call for the child craftable with amount needed from the current recipe amount
            this.getChildRecipe(itemList, currentItem, currentItem.recipe, recipe[ingredient]*currentAmountNeeded);
        }
        else {
            // add to final recipe
            this.addToRecipe(ingredient, recipe[ingredient]*currentAmountNeeded);
        }
    }
};