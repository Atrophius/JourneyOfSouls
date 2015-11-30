// Pulled from Stack Overflow, of course.
String.prototype.stripTags = function() {
    var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
    var tagOrComment = new RegExp(
        '<(?:'
        // Comment body.
        + '!--(?:(?:-*[^->])*--+|-?)'
        // Special "raw text" elements whose content should be elided.
        + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
        + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
        // Regular name
        + '|/?[a-z]'
        + tagBody
        + ')>',
        'gi'
    );
    
    var string = this;
    var oldString;
    do {
        oldString = string;
        string = string.replace(tagOrComment, '');
    } while (string !== oldString);
    
    return string.replace(/</g, '&lt;');
};