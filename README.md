# Minecraft SkyFactory 3 Tiered Crafting Calculator

This tool was made out of frustration of having to figure out how many items I needed in order to craft a specific tier of solar panels from the [SkyFactory 3 modpack](https://www.feed-the-beast.com/projects/ftb-presents-skyfactory-3). The version used is **3.0.13**.

## Requirements

Since I wanted to put this on a server and not have to worry about it, it was built with [Node.js](https://nodejs.org/en/). Refer to the `package.json` for any dependencies. If you want to have an offline version, download the folder named `offline`. After downloading, run `index.html` on your browser. Alternatively, you can go to my [GitHub Pages](https://lazukr.github.io/).

## Usage

### Basic Materials

The page shows a list of 'basic materials' that are intuitive in how you obtain it, hence they are called 'basic materials'. Do note that it does **NOT** mean that they do not require some sort of crafting. They are just stuff you should know how to craft.

### Craftable Materials

This is a list of materials that can be crafted. Click on any of them and they will show up on the 'Item selected' section.

### Item Required

This list out the original crafting recipe of the selected item.

### Basic Items Needed

This list out all the basic materials that is required to craft the item. Since it rounds up when it comes to crafting recipes that are not 1 to 1, you may find that you will have leftovers after crafting. (Eg. recipe for mirrors produce 2 at a time, but you need 3 in a solar panel. The calculator will round up to 4 mirrors so you produce it twice).

## Supported mods in SkyFactory 3
* [Solar Flux Reborn](https://minecraft.curseforge.com/projects/solar-flux-reborn)

## Disclaimer

There may be bugs in the tool resulting in an inaccurate list of required items. Extensive testing will soon be conducted.


## Acknowledgements
* [Phaser](https://phaser.io/) as this was built with Phaser.
* All images were take from the [Unofficial Feed the Beast Wiki page](https://ftbwiki.org/Feed_The_Beast_Wiki). These images belong to their respective creators (Mojang / the creator of a specific mod).



