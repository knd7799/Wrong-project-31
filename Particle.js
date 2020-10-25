class Particle
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			
			}
		
        this.r=r;
        this.color=color(random(0,255),random(0,255),random(0,255));
		//add the paper image here
		this.body=Bodies.circle(x,y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
		
	   if(frameCount % 60===0){
		   particlepos.push(new particle(random(width/2-10,width/2+10),10,10));

	   }
			
		var pos=this.body.position;
		var angle = this.body.angle;		
		push()
		translate(pos.x, pos.y);
		rotate(angle);
		fill(this.color);
		ellipseMode(RADIUS);
		ellipse(0,0,this.r, this.r);
		pop()
			
			
	}

}