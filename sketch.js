//Create variables here
var dog,happyDog,foodStock,dogI,database,food
var foodS,foodGG,timeta,bg,backgroundImg
var x =20
var gameState = 0
var washroom,addFoodd
var gameV

function preload()
{
	//load images here
  dogI = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
  washroom = loadImage("washRoom.png");
  bedroom = loadImage("bedRoom.png")
  livingRoom = loadImage("livingRoom.png")

}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
timeta = database.ref('time')
timeta.on("value",timestock)
gameV = database.ref('gameState')
gameV.on("value",gamestock)
  dog = createSprite(750,250,50,50);
  dog.scale = 0.3;
  dog.addImage(dogI)
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)
  


  addFoodd = createButton("Add Food");
  addFoodd.position(800,95);
 addFoodd.mousePressed(addFood)
  foodGGG = new Game();
  foodGG = new Game();
 // foodGGG.getState();
}


function draw() {  

    background("yellow");
if(keyWentDown(UP_ARROW)){
  writeStock(x-1);
  dog.addImage(happyDog)
}
foodGGG.display();
foodGG.display();
var Bath = createButton("I want to take bath");
Bath.position(500,125)
if(Bath.mousePressed(function (){
  gameState = 3;
  database.ref('/').update({'gameState':gameState})
}))
if(gameV===3){
  dog.addImage(washroom);
  dog.scale=1;
  foodGG.visible = false;
  foodGGG.visible = false;
}
var sleepy = createButton("I am very sleepy");
sleepy.position(710,125)
if(sleepy.mousePressed(function (){
  gameState = 4;
  database.ref('/').update({'gameState':gameState})
}))
if(gameV===4){
  dog.addImage(bedroom);
  dog.scale=1;
  foodGG.visible = false;
  foodGGG.visible = false;
}
var play = createButton("Lets Play !");
play.position(500,160)
if(play.mousePressed(function (){
  gameState = 5;
  database.ref('/').update({'gameState':gameState})
}))
if(gameV===5){
  dog.addImage(livingRoom);
  dog.scale=1;
  foodGG.visible = false;
  foodGGG.visible = false;
}
  drawSprites();
  //add styles here
  text("foodStock: "+foodStock , 100,100)
  text("time: " +timeta , 150,150)
}
function readStock(data){
  foodStock = data.val();
  console.log(foodStock)
}
function timestock(data){
  timeta = data.val();
  console.log(timeta)
}
function gamestock(data){
  gameV = data.val();
  console.log(gameV)
}

function writeStock(){


}
function feedDog(){
  dog.addImage(happyDog);

  //foodGGG.update(foodGGG.getState()-1);
database.ref('/').update({
  Food: foodStock = foodStock-1
})
}
function addFood(){
  dog.addImage(happyDog);


database.ref('/').update({
  Food: foodStock = foodStock+1
})
}
