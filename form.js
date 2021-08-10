class Form
{
    constructor()
    {
this.input=createInput("").attribute("placeHolder","ENTER YOUR NAME")
this.playButton=createButton("PLAY")
this.greeting = createElement("h2")
this.titleImg = createImg("./assets/title.png","GAME TITLE")
    }
setElementsPosition()
{
  this.input.position(width/2 - 110, height/2 - 80)
  this.playButton.position(width/2 - 90, height/2 - 20)
  this.greeting.position(width/2 - 200, height/2 - 100)
  this.titleImg.position(120,50)

}

setElementsStyle()
{
    this.input.class("customInput")
    this.playButton.class("customButton")
    this.greeting.class("greeting")
    this.titleImg.class("gameTitle")
}

hide()
{
    this.input.hide()
    this.playButton.hide()
    this.greeting.hide()
}

handleMousePressed()
{
    this.playButton.mousePressed(()=>{
this.playButton.hide()
this.input.hide()
var abc = `HELLO ${this.input.value()}
</br>wait for another player to join`;
this.greeting.html(abc)
playerCount += 1
player.name = this.input.value()
player.index = playerCount
player.addPlayer()
player.updateCount(playerCount)
        
player.getDistance()
    });
}
    display()
    {
this.setElementsPosition()
this.handleMousePressed()
this.setElementsStyle()
    }
}