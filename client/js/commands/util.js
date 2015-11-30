/* global CommandProcessor */
/* global http */
var UtilCommands = new CommandProcessor();

UtilCommands.addCommand("clear", function(d) {
    d.clearScreen();
    d.handleOutput("Screen cleared.");
});

UtilCommands.addCommand("help", function(d) {
    d.handleOutput("There's no help for you here.");
    d.handleOutput();
    d.handleOutput("Just kidding. Try moving around: n, s, e, w");
});

UtilCommands.addCommand("motd", function(d) {
    // TODO: Cache the response of this request
    http("/splash.txt", function(response) {
        d.handleOutput("<pre>" + response + "</pre>");
        d.handleOutput();
        var warningMessage = "This build is completely unoptimized. There's no " + 
        "asset combining or minification being done. A good number of JavaScript " +
        "files may be requested. I'm also attempting to do all of this in pure, " +
        "vanilla JavaScript (ES5) without using any frameworks or libraries. " +
        "I also can't guarantee it will work in all browsers. For reference, " +
        "I'm developing using Google Chrome. There be dragons ahead.";
        d.handleOutput(warningMessage, ['warning']);
        d.handleOutput();
    });
});
