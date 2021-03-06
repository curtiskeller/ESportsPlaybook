var fs = require("fs");
var path = require("path");
var Handlebars = require("handlebars");

var View = function(viewName) {
    
    var templatePath = path.join(__dirname,"../views",viewName + ".hbs");
    var source = fs.readFileSync(templatePath, "utf-8");
    var template = Handlebars.compile(source);

    this.ToHtml = function(context) {
        return template(context);
    };
};

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

module.exports = View;