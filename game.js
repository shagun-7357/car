class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount()
            }
        form=new Form()
        form.display()
        }
    }
    play(){
        form.hide()
        textSize(30)
        text("game start",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var dp=150
            for(var p in allPlayers){
                if(p==="player"+player.index){
                    fill("red")

                }
                else{
                    fill("black")
                }
                dp=dp+20
                textSize(20)
                text("name: "+allPlayers[p].name +   "     distance:  "+allPlayers[p].distance, 100,dp)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==0){
            player.distance+=50
            player.update()
        }
    }
}