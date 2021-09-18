var canvas = new fabric.Canvas('myCanvas');

ball_y=10;
ball_x=10;
hole_y=400;
hole_x=800;

block_image_width = 30;
block_image_height = 30;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(150);
		hole_obj.scaleToHeight(140);
		hole_obj.set({
		top:hole_y,
		left:hole_x    
		});
		canvas.add(hole_obj);
   
	   });
	   new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x    
		});
		canvas.add(ball_obj);
        });
	     
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
        canvas.remove(ball_obj);
		block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
		document.getElementById("hd3").innerHTML= "You Have Hit The Goal!!!";
        document.getElementById("myCanvas").style.borderColor="red";
		
	}
	
	    {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0)
        {
			ball_y=ball_y - block_image_height;
            console.log("block image height = " + block_image_height);
            console.log("When Up Arrow Key Is Pressed, X = " + ball_x + ", Y = " +ball_y);
            canvas.remove(ball_obj);
            new_image();
		}
	}

	function down()
	{
		if(ball_y<=500)
		{
			ball_y= ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down Arrow Key Is Pressed, X = " + ball_x + ", Y = " +ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >=0)
		{
			ball_x=ball_x - block_image_width;
            console.log("block image width = " + block_image_width);
            console.log("When left Arrow Key Is Pressed, X = " + ball_x + ", Y = " +ball_y);
            canvas.remove(ball_obj);
            new_image();
		}
	}

	function right()
	{ 
		if(ball_x <=850) 
		{
			 ball_x=ball_x + block_image_width;
			 console.log("block image width = " + block_image_width);
			 console.log("When right Arrow Key Is Pressed, X = " + ball_x + ", Y = " +ball_y);
			 canvas.remove(ball_obj);
			 new_image();
		}
	}
	
}

