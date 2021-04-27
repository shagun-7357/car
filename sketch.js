var gameState=0, playerCount=0, distance=0, allPlayers
var form,player,game
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        game.play()
    }
    drawSprites();
}
