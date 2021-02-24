class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.8,
            density:1,
            friction:0.1,
            frictionAir:0.001
        }
        this.r=r;
        this.visible = true;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.body.velocity.x = Math.round(random(-4,4));
        this.body.velocity.y = Math.round(random(-4,4));
        World.add(world, this.body);

    }
    display() {
        
        var rand = Math.round(random(-4,4))
        if(this.body.velocity.x<1 || this.body.velocity.x>-1 ||
           this.body.velocity.y<1 || this.body.velocity.y>-1){

           Matter.Body.applyForce(this.body,this.body.position,{x:rand,y:0})
        }


        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

        

        
    }

    isClicked(){
        var d = dist(this.body.position.x,this.body.position.y,mouseX,mouseY)
        
        if(d<=this.r){
            score = score+5
            World.remove(world,this.body);
        }
    }

};
