class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingSho);
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    attach(){
        this.slingShot.bodyA = rock.body;
    }
    display(){
        if(this.slingSho.bodyA= null){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}