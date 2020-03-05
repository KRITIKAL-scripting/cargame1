class Form{
    constructor() {


    }
    display() {
        var title = createElement('h2');
        title.html('car racing game');
        title.position(200,0);
        var input = createInput("bob");
        var button = createButton("PLAY");
        input.position(200,150);
        button.position(280,200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html('HELLO ' + name);
            greeting.position(200,180);
            
        })
    }
}