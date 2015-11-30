/**
 * Descriptor - This class controls all interaction between the game and the client.
 */

function Descriptor() {
    this.lastCommand = "";
}

Descriptor.prototype.handleInput = function(e) {
    e.which = e.which || e.keyCode;
    if (e.which == 13) {
        // See /js/monkey-patching.js for String.prototype.stripTags implementation
        var input = e.target.value.stripTags();
        this.handleOutput(input);
        this.lastCommand = input || this.lastCommand; // Don't overwrite last command with empty string
        e.target.value = "";
    }
    
    // Support up arrow to get last entered command.
    if (e.which == 38 && e.target.value == "") {
        e.target.value = this.lastCommand;
    }
};

Descriptor.prototype.handleOutput = function(text, additionalClasses) {
    var div = document.createElement('div');
    var screenContainer = document.getElementById('screen-container');
    var mainScreen = document.getElementById('main-screen');
    additionalClasses = additionalClasses || [];
    
    div.className = "console-line";
    
    if (additionalClasses instanceof Array && additionalClasses.length > 0) {
        var classes = " " + additionalClasses.join(" ");
        div.className += classes;
    }
    
    div.innerHTML = text || "&nbsp;";
    
    mainScreen.appendChild(div);
    screenContainer.scrollTop = screenContainer.scrollHeight;
};

Descriptor.prototype.handleClick = function() {
    if (typeof window.getSelection == "undefined" || window.getSelection().toString() == "") {
        document.getElementById("command-box").focus();
    }
};