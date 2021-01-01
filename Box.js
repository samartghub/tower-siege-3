class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.visibility = 255;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  display(){

    
      if(this.body.speed <3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
    
      } else{
        World.remove(world,this.body)
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility)
        console.log(this.body.speed)
        pop();
      }
  }
}
  