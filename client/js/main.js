/* global Descriptor */
/* global UtilCommands */
(function() {
    // Handle client descriptor
    var d = new Descriptor();
    d.addCommandProcessor(UtilCommands);
    
    // Setup event listeners
    document.getElementById("command-box").addEventListener("keyup", d.handleInput.bind(d));
    document.addEventListener("click", d.handleClick);
    
    // Setup starting text
    d.handleCommand("motd");
})();