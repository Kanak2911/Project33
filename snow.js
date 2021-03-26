class Snow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.snow.position.y > height){
           Matter.Body.setPosition(this.snow, {x:random(0,400), y:random(0,400)})
        }
    }

    showSnow(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.snow.position.x,this.snow.position.y,this.radius,this.radius);
    }
}