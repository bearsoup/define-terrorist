var json, newdef = "a person who uses unlawful violence and intimidation, especially against civilians, in the pursuit of political aims.";

function preload() {
    json = loadStrings('grammar.txt');
}

function setup() {
    noCanvas();
    var grammar = new RiGrammar(json.join('\n'));
    var terrorist = select('#definition');
    var disagree = select('#new-def');
    disagree.mouseClicked(function() {
        newdef = grammar.expand();
        terrorist.html(newdef);
        // prevent default
        return false;
    });

    var tweetdef = select('#tweet-def');
    tweetdef.mouseClicked(function() {
        var url = "https://twitter.com/intent/tweet?text=" + "A %23terrorist is " + newdef + " www.defineterrorist.us";
        window.open(url);
        // prevent default
        return false;
    });
}
