/* global Descriptor */
/* global http */
(function() {
    // Handle client descriptor
    var d = new Descriptor();
    
    // Setup event listeners
    document.getElementById("command-box").addEventListener("keyup", d.handleInput.bind(d));
    document.addEventListener("click", d.handleClick);
    
    // Setup starting text
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
})();