function CommandProcessor() {
    this.commands = {};
    this.aliases = {};
}

CommandProcessor.prototype.addCommand = function(name, action) {
    this.commands[name] = action;
};

CommandProcessor.prototype.removeCommand = function(name) {
    delete this.commands[name];
    
    // Alias cleanup -- Removing an alias will not remove the base command
    // Removing the base command will remove all aliases
    if (this.aliases[name]) {
        this.aliases[name].forEach(function(alias) {
            this.removeCommand(alias);
        }.bind(this));
        delete this.aliases[name];
    }
};

CommandProcessor.prototype.processCommand = function(d, name) {
    if (this.commands[name]) {
        this.commands[name](d);
        return true;
    }
    
    return false;
};

CommandProcessor.prototype.aliasCommand = function(name, alias) {
    if (this.commands[name]) {
        this.commands[alias] = this.commands[name];
        
        if (this.aliases[name]) {
            this.aliases[name].push(alias);
        }
        else {
            this.aliases[name] = [alias];
        }
    }
};
