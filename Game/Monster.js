class Monster {
    constructor(x, y,r) {

        var options ={
            restitution:0.8
        }
        this.r=r;
        this.image = loadImage("monster.png");   
        this.body = Bodies.circle(x, y, this.r,options);    
       
    
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(CENTER);
        image(this.image,0, 0, this.r*2,this.r*2);

        pop();
    }

    isClicked(){
        var d = dist(this.body.position.x,this.body.position.y,mouseX,mouseY)
        
        if(d<=this.r){
            gameState = "OVER"
        }
    }

};
