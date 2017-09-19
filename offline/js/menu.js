var Menu = function(game) {};

Menu.prototype = {

    preload: function() {

        // display all static stuff
        game.stage.backgroundColor = '#aec6cf';

        var textTitle = game.add.text(game.width/2, game.height/8, "Minecraft Skyfactory 3 Tiered Crafting Required Materials");
        textTitle.anchor.setTo(0.5, 0.5);

        var textBasic = game.add.text(game.width/8, game.height/4, "Basic Items");
        textBasic.anchor.setTo(0.5, 0.5);

        var textCrafted = game.add.text(game.width/8, game.height/2, "Craftable Items");
        textCrafted.anchor.setTo(0.5, 0.5);

        var textSelected = game.add.text(game.width/8*6, game.height/4, "Item Selected");
        textSelected.anchor.setTo(0.5, 0.5);

        var textItemsRequired = game.add.text(game.width/8*6, game.height/3+game.height/50, "Items Required");
        textItemsRequired.anchor.setTo(0.5, 0.5);

        var textBasicItemsRequired = game.add.text(game.width/8*6, game.height/2, "Basic Items Needed");
        textBasicItemsRequired.anchor.setTo(0.5, 0.5);
    },


    create: function() {

        // make the final recipe list
        for (var item in game.ITEM_LIST) {
            game.ITEM_LIST[item].getFinalRecipe(ITEM_DATA);
        }

        // add variable text
        var textCurrentlyOverItem = game.add.text(game.width/2, game.height/8*7, "");
        textCurrentlyOverItem.anchor.setTo(0.5, 0.5);
        var textNumCreated = game.add.text(game.width/50*36, game.height/4 + game.height/40, "");
        textNumCreated.align = 'right';



        // add the item groups
        var basicItemGroup = new ItemGroup(game);
        var craftableItemGroup = new ItemGroup(game, true);
        var selectedItemGroup = new ItemGroup(game);
        var requiredItemGroup = new ItemGroup(game);
        var basicRequiredItemGroup = new ItemGroup(game);

        // these two groups are used like an item group, but they are just text
        var textAmountGroup = new ItemGroup(game);
        var textBasicAmountGroup = new ItemGroup(game);
        textAmountGroup.inputEnableChildren = false;
        textBasicAmountGroup.inputEnableChildren = false;

        // link item groups to variable text so text will update on hover
        basicItemGroup.displayText = textCurrentlyOverItem;
        craftableItemGroup.displayText = textCurrentlyOverItem;
        selectedItemGroup.displayText = textCurrentlyOverItem;
        requiredItemGroup.displayText = textCurrentlyOverItem;
        basicRequiredItemGroup.displayText = textCurrentlyOverItem;

        selectedItemGroup.createWithCallback = function(x, y, item) {
            // showing icon and number on selected item group
            selectedItemGroup.create(0, 0, item.key);
            textNumCreated.text = item.data.amount;

            // resetting all the other variable groups
            requiredItemGroup.removeAll(true);
            basicRequiredItemGroup.removeAll(true);
            textAmountGroup.removeAll(true);
            textBasicAmountGroup.removeAll(true);

            // adds all the items required for the current selected item
            for (var key in item.data.recipe) {
                requiredItemGroup.create(0, 0, key);
                requiredItemGroup.align(2, -1, 140, 35);
                var textAmount = game.add.text(0, 0, item.data.recipe[key]);
                textAmount.align = 'left';
                textAmountGroup.add(textAmount);
                textAmountGroup.align(2, -1, 140, 35);
            }

            // adds all the basic items required for the current selected item
            for (var key in item.data.finalRecipe) {
                basicRequiredItemGroup.create(0, 0, key);
                basicRequiredItemGroup.align(2, -1, 140, 35);
                var textBasicAmount = game.add.text(0, 0, item.data.finalRecipe[key]);
                textBasicAmount.align = 'left';
                textBasicAmountGroup.add(textBasicAmount);
                textBasicAmountGroup.align(2, -1, 140, 35);
            }
        };


        // add custom function to update selected item to the selected item section
        craftableItemGroup.onChildInputDown.add(function(item) {
            selectedItemGroup.removeAll(true);
            selectedItemGroup.createWithCallback(0, 0, item);
            
        });

        // look through the list of items and add sprites
        // corresponding to where the item belongs
        for (var key in game.ITEM_LIST) {
            if (game.ITEM_LIST[key].craftable) {
                craftableItemGroup.create(0, 0, key);
            } else {
                basicItemGroup.create(0, 0, key);
            }
        }

        // positioning
        basicItemGroup.align(5, -1, 35, 35);
        basicItemGroup.centerX = game.width/8;
        basicItemGroup.y = game.height/4 + game.height/50;

        craftableItemGroup.align(5, -1, 35, 35);
        craftableItemGroup.centerX = game.width/8;
        craftableItemGroup.y = game.height/2 + game.height/50;

        selectedItemGroup.centerX = game.width/8*6;
        selectedItemGroup.y = game.height/4 + game.height/50;

        requiredItemGroup.centerX = game.width/10*7;
        requiredItemGroup.y = game.height/3 + game.height/50*2;

        textAmountGroup.centerX = game.width/50*33;
        textAmountGroup.y = game.height/3 + game.height/40*2;

        basicRequiredItemGroup.centerX = game.width/10*7;
        basicRequiredItemGroup.y = game.height/2 + game.height/20;

        textBasicAmountGroup.centerX = game.width/50*33;
        textBasicAmountGroup.y = game.height/2 + game.height/20;

    }

};