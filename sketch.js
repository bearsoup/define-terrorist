var json, newdef = "a person who uses unlawful violence and intimidation, especially against civilians, in the pursuit of political aims.";

function preload() {
    json = loadStrings('grammar.txt');
}

function setup() {
    noCanvas();
    var grammar = new RiGrammar(json.join('\n'));
    var terrorist = select('#definition');
    var disagree = select('#new-def');
    disagree.mousePressed(function() {
        newdef = grammar.expand();
        terrorist.html(newdef);
    });

    var tweetdef = select('#tweet-def');
    tweetdef.mousePressed(function() {
        var url = "https://twitter.com/intent/tweet?text=" + "A %23terrorist is " + newdef + " www.defineterrorist.us";
        window.open(url);
    });
}
