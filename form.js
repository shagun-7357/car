class Form{
    constructor(){
        this.title=createElement('h1')
        this.input=createInput('name')
        this.button=createButton('play')
        this.greeting=createElement('h3')
        
    }
    display(){
        this.title.html('Car Racing Game')
        this.title.position(130,0)
        this.input.position(200,250)
        this.button.position(250,300)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html('welcome '+player.name)
            this.greeting.position(200,250)


        })
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }
}