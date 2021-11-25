var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_img_width = 350;
block_img_height = 430;

var block_img_object= "";

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top : block_y,
            left : block_x,
        });
        canvas.add(block_img_object);
    });
    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 1;
		new_image('rr1.png');
		console.log("RED");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
		console.log("GREEN");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yelloe.png');
		console.log("YELLOW");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("PINK");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
		console.log("BLUE");
	}
	
}

