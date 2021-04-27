class Player{
    constructor(){
      this.name=null
      this.distance=0
      this.index=0

    }
    getCount(){
        database.ref('playerCount').on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,distance:this.distance
        })
    }
    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers=data.val()
        })
    }

}