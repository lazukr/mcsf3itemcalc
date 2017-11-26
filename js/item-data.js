var ITEM_DATA = {
    "Iron_Ingot": {
        "craftable": 0
    },

    "Redstone": {
        "craftable": 0
    },

    "Glowstone_Dust": {
        "craftable": 0
    },

    "Glass": {
        "craftable": 0
    },

    "Clay": {
        "craftable": 0
    },

    "Lapis_Lazuli": {
        "craftable": 0
    },

    "Stone": {
        "craftable": 0
    },

    "Gold_Ingot": {
        "craftable": 0
    },

    "Wood_Plank": {
        "craftable": 0
    },

    "Obsidian": {
        "craftable": 0
    },

    "Blaze_Rod": {
        "craftable": 0
    },

    "Diamond": {
        "craftable": 0
    },

    "Quartz": {
        "craftable": 0
    },

    "Stick": {
        "craftable": 0
    },

    "Redstone_Torch": {
        "craftable": 1,
        "recipe": {
            "Stick": 1,
            "Redstone": 1
        },
        "amount": 1
    },

    "Piston": {
        "craftable": 1,
        "recipe": {
            "Wood_Plank": 3,
            "Iron_Ingot": 1,
            "Redstone": 1,
            "Stone": 4
        },
        "amount": 1
    },

    "Block_of_Iron": {
        "craftable": 1,
        "recipe": {
            "Iron_Ingot": 9
        },
        "amount": 1
    },

    "Block_of_Gold": {
        "craftable": 1,
        "recipe": {
            "Gold_Ingot": 9
        },
        "amount": 1
    },

    "Block_of_Diamond": {
        "craftable": 1,
        "recipe": {
            "Diamond": 9
        },
        "amount": 1
    },

    "Block_of_Quartz": {
        "craftable": 1,
        "recipe": {
            "Quartz": 4
        },
        "amount": 1
    },

    "Clock": {
        "craftable": 1,
        "recipe": {
            "Gold_Ingot": 4,
            "Redstone": 1
        },
        "amount": 1
    },

    "Repeater": {
        "craftable": 1,
        "recipe": {
            "Stone": 3,
            "Redstone_Torch": 2,
            "Redstone": 1
        },
        "amount": 1
    },

    "Glowstone": {
        "craftable": 1,
        "recipe": {
            "Glowstone_Dust": 4
        },
        "amount": 1
    },

    "Redstone_Lamp": {
        "craftable": 1,
        "recipe": {
            "Glowstone": 1,
            "Redstone": 4
        },
        "amount": 1
    },

    "Mirror": {
        "craftable": 1,
        "recipe": {
            "Glass": 3,
            "Iron_Ingot": 1
        },
        "amount": 2
    },

    "Photovoltaic_Cell_I": {
        "craftable": 1,
        "recipe": {
            "Glass": 3,
            "Mirror": 3,
            "Lapis_Lazuli": 3
        },
        "amount": 1
    },

    "Photovoltaic_Cell_II": {
        "craftable": 1,
        "recipe": {
            "Mirror": 2,
            "Clay": 3,
            "Lapis_Lazuli": 3,
            "Photovoltaic_Cell_I": 1
        },
        "amount": 1
    },

    "Photovoltaic_Cell_III": {
        "craftable": 1,
        "recipe": {
            "Glass": 3,
            "Glowstone_Dust": 3,
            "Obsidian": 2,
            "Photovoltaic_Cell_II": 1
        },
        "amount": 1
    },

    "Photovoltaic_Cell_IV": {
        "craftable": 1,
        "recipe": {
            "Blaze_Rod": 3,
            "Block_of_Diamond": 1,
            "Glowstone_Dust": 2,
            "Photovoltaic_Cell_III": 1
        },
        "amount": 1
    },

    "Solar_Panel_I": {
        "craftable": 1,
        "recipe": {
            "Mirror": 3,
            "Redstone": 1,
            "Wood_Plank": 5
        },
        "amount": 1
    },

    "Solar_Panel_II": {
        "craftable": 1,
        "recipe": {
            "Solar_Panel_I": 8,
            "Piston": 1
        },
        "amount": 1
    },

    "Solar_Panel_III": {
        "craftable": 1,
        "recipe": {
            "Photovoltaic_Cell_I": 3,
            "Solar_Panel_II": 4,
            "Repeater": 1,
            "Block_of_Iron": 1
        },
        "amount": 2
    },

    "Solar_Panel_IV": {
        "craftable": 1,
        "recipe": {
            "Photovoltaic_Cell_II": 3,
            "Solar_Panel_III": 4,
            "Clock": 1,
            "Block_of_Iron": 1
        },
        "amount": 2
    },

    "Solar_Panel_V": {
        "craftable": 1,
        "recipe": {
            "Photovoltaic_Cell_III": 3,
            "Solar_Panel_IV": 4,
            "Redstone_Lamp": 1,
            "Block_of_Gold": 1
        },
        "amount": 2
    },

    "Solar_Panel_VI": {
        "craftable": 1,
        "recipe": {
            "Photovoltaic_Cell_IV": 3,
            "Solar_Panel_V": 4,
            "Redstone_Lamp": 1,
            "Block_of_Diamond": 1
        },
        "amount": 2
    }
};