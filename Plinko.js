class plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			
			}
		this.x=x;
		this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
		for(var j = 40; j <= width; j=j+50)
		{
           plinkos.push(new Plinko(j,75));
		}
	   for(var j=15;j<= width - 10; j=j + 50)
	   {
		   plinkos.push(new Plinko(j,175));
       }
       var pos=this.body.position;	
		push()
		translate(pos.x, pos.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill(255,0,255)
		ellipse(0,0,this.r, this.r);
		pop()
    }
}