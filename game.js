class Game
{
    constructor()
    {

    }
getState()
{
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState = data.val()
    }
    )
update(state)
{
    database.ref("/").update({
        gameState : state
    })
}
}
    start()
    {
        form = new Form()
        form.display()
        player = new Player()
        playerCount = player.getCount()
        car1 = createSprite(width/2 - 50,height - 100)
        car1.addImage("car1",car1Img)
        car2 = createSprite(width/2 + 100,height - 100)
        car1.addImage("car2",car2Img)
        cars = [car1,car2]

    }

    handleElements(){
        form.hide()
        form.titleImg.position(40,50)
        form.titleImg.class("gameTitlteAfterEffect")
    }

    play(){
        this.handleElements()
Player.getPlayersInfo()
if(allPlayers!=undefined)
{
    image(track,0,-height*5,width,height*6)
    var index = 0
    for(var plr in allPlayers)
    {
index = index+1
var x = allPlayers[plr].positionX
var y = height - allPlayers[plr].positionY
cars[index-1].position.x = x;
cars[index-1].position.y = y;
if(index==player.index)
{
fill("red")
ellipse(x,y,60,60)
camera.position.x = cars[index-1].position.x
camera.position.y = cars[index-1].position.y
}

    }
    this.handlePlayerControls()
drawSprites();
}
    }
    handlePlayerControls()
{
    if(keyIsDown(UP_ARROW))
    {
player.positionY += 10
player.update()
    }
    }
}