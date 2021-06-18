class Ball{
   
    constructor(x,y,radius){
      var ball_options={
      restitution:0.05,
      airResistance:0.01,
      }
       this.x = x,
       this.y = y,
       this.radius = radius,
       this.body = Bodies.circle(x,y,radius);
       World.add(world,this.body)

    }
     display(){
        var pos = this.body.position;
        push(); 
        ellipse(pos.x,pos.y, this.radius);
        pop();

     


     }
    










}