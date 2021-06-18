class Rect{
     constructor(x,y,width,height){
      var rect_options={
       isStatic:true

      }
     this.height = height;
     this.width = width;
     this.x = x;
     this.y = y;
     this.body = Bodies.rectangle(x,y,this.width,this.height,rect_options)
      



  











     }
    

     display1()
     {

        var pos= this.body.position;
            fill("#32426e");
            rectMode(CENTER)
            rect(pos.x,pos.y,this.width,this.height); 
     }  
     }










