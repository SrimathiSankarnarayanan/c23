class Box{

    constructor(x,y,width,height){
        var BoxOption={
            // DEGREE OF BOUNCINESS
                restitution:0.8,
                friction:0.3,
                density:1.0
            
            
          }
          this.body=Bodies.rectangle(x,y,width,height,BoxOption);
          this.width=width;
          this.height=height;
          World.add(myWorld,this.body);


    }
     display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();
     }
}
