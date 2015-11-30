/* global CommandProcessor */
/* global http */
var UtilCommands = new CommandProcessor("UtilCommands", "Utility Commands");

UtilCommands.addCommand("clear", "Clears the screen",
function(d) {
    d.clearScreen();
    d.handleOutput("Screen cleared.");
});

UtilCommands.addCommand("help", "Various help text",
function(d, args) {
    console.log(args);
    switch(args) {
        case 'commands':
            d.commandProcessors.forEach(function(p) {
                p.listCommands(d);
            });
        break;
            
        default:
            var output = "Available help commands (help [command]): \n" +
            "  commands - Show a list of all commands you can use.";
            d.handleOutput("<pre>" + output + "</pre>");
        break;
    }
});

UtilCommands.addCommand("motd", "Message of the Day",
function(d) {
    // TODO: Cache the response of this request
    http("/splash.txt", function(response) {
        d.handleOutput("<pre>" + response + "</pre>");
        
        var warningMessage = "This build is completely unoptimized. There's no " + 
        "asset combining or minification being done. A good number of JavaScript " +
        "files may be requested. I'm also attempting to do all of this in pure, " +
        "vanilla JavaScript (ES5) without using any frameworks or libraries. " +
        "I also can't guarantee it will work in all browsers. For reference, " +
        "I'm developing using Google Chrome. There be dragons ahead.";
        d.handleOutput(warningMessage, ['warning']);
    });
});
