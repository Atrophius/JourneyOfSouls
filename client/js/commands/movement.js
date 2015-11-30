/* global CommandProcessor */
var MovementCommands = new CommandProcessor();

MovementCommands.addCommand("north", function(d) {
    // Move character north
});

// Direction aliases
MovementCommands.aliasCommand("north", "n");
MovementCommands.aliasCommand("south", "s");
MovementCommands.aliasCommand("east",  "e");
MovementCommands.aliasCommand("west",  "w");

MovementCommands.aliasCommand("northeast", "ne");
MovementCommands.aliasCommand("southeast", "se");
MovementCommands.aliasCommand("northwest",  "nw");
MovementCommands.aliasCommand("southwest",  "sw");

MovementCommands.aliasCommand("up", "u");
MovementCommands.aliasCommand("down", "d");

// TODO: up/down variations of 8 cardinals
