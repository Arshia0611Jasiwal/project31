class Umbrella{
    constructor(x,y){
        var options={
          isStatic:false  
          
        }

        this.Bodies.circle(x,y,radius,options,this.image);
        this.radius=radius;
        this.image = loadImage("project31.png");

        World.add(world,this.body,);
    }
    display(){
        this.image()
        ellipesMode(RAIUS)
        this.body(x,y,radius,radius);

    }
}