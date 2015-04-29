var html = require('htmlparser2');

function disjointHTML(htmlString) {
    var classes = [],
        htmlparser = new html.Parser({
            onopentag: function onopentag(name, attribs) {
                if (attribs['class']) {
                    Array.prototype.push.apply(classes, attribs['class'].split(' '));
                }
            }
        });

    htmlparser.write(htmlString);

    // remove duplicates
    classes = classes
                .filter(function(c, i, array) {
                    return array.lastIndexOf(c) === i;
                });

    return classes;
}

module.exports = disjointHTML;