class Game {
  constructor(){
    this.image = loadImage("Milk.png");
    this.foodStock
  }
  
  getState(){
    var gameStateRef  = database.ref('Food');
    gameStateRef.on("value",(data)=>{
     foodStock = data.val();
     this.foodStock = data.val();
     console.log(foodStock)
    })
   
  }

  update(state){
    database.ref('/').update({
      Food: state
    });

  }

  display(){
    var x =80,y=100;
 
  imageMode(CENTER);
//  image(this.image,720,220,70,70);

  if(foodStock !==0){
    for(var i=0;i<foodStock;i++){
      if(i%10===0){
x=80
y=y+50
      }
    image(this.image,x,y,50,50);
    x =x+30;
    }
  }

  }
}
