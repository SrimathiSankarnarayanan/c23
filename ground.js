class Ground{
 
    constructor(){
    
        var groundOption={
            isStatic:true,
            density:1
          }
        
        //Created PE bodies
       this.body=Bodies.rectangle(200,380,400,10,groundOption);
       this.width=400;
       this.height=10;
       World.add(myWorld,this.body);

    }

    display(){

        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        stroke("white");
        rect(pos.x,pos.y,this.width,this.height);
        pop();

    }

}