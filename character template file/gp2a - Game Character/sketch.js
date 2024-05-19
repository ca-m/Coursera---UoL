/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ..
	

	//undergarments
	fill(48,49,77);
	triangle(gameChar_x - 9,gameChar_y - 57, gameChar_x -9,gameChar_y - 50, gameChar_x - 16,gameChar_y - 50);
	triangle(gameChar_x + 8, gameChar_y - 57, gameChar_x + 8, gameChar_y - 50, gameChar_x + 15, gameChar_y - 50);
	rect(gameChar_x - 8,gameChar_y - 26,7,27,3);
	rect(gameChar_x,gameChar_y - 26,7,27,3);
	rect(gameChar_x-15.5, gameChar_y - 52, 6,28,3);
	rect(gameChar_x+8.5, gameChar_y - 52, 6,28,3);

	//robe
	fill(83,96,140);
	triangle(gameChar_x - 9,gameChar_y - 57, gameChar_x + 8,gameChar_y - 57, gameChar_x,gameChar_y - 68);
	rect (gameChar_x - 9,gameChar_y - 57,17,36);

	//scarf
	fill(76,19,11);
	rect(gameChar_x - 5,gameChar_y - 65, 10,20,5);

	//headscarf
	fill (149,29,39);
	circle(gameChar_x,gameChar_y - 68,16.5);
	triangle(gameChar_x - 8,gameChar_y - 66, gameChar_x + 8,gameChar_y - 66, gameChar_x,gameChar_y - 56);

	//face
	fill(36,36,28);
	rect(gameChar_x - 5,gameChar_y - 71, 10,5,3);


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...

	
	//undergarments
	fill(48,49,77);
	triangle(gameChar_x - 9,gameChar_y - 57, gameChar_x -9,gameChar_y - 50, gameChar_x - 16,gameChar_y - 50);
	triangle(gameChar_x + 8, gameChar_y - 57, gameChar_x + 8, gameChar_y - 50, gameChar_x + 15, gameChar_y - 50);
	beginShape();
	vertex(gameChar_x - 9,gameChar_y - 27);
	vertex(gameChar_x - 15, gameChar_y - 20);
	vertex(gameChar_x - 15, gameChar_y - 13);
	vertex(gameChar_x, gameChar_y - 27);
	vertex(gameChar_x - 9,gameChar_y - 27);
	endShape();
	rect(gameChar_x - 16,gameChar_y - 21,7,18,3);
	beginShape();
	vertex(gameChar_x + 7,gameChar_y - 27);
	vertex(gameChar_x + 16, gameChar_y - 20);
	vertex(gameChar_x + 16, gameChar_y - 13);
	vertex(gameChar_x - 2, gameChar_y - 27);
	vertex(gameChar_x + 7,gameChar_y - 27);
	endShape();
	rect(gameChar_x + 9,gameChar_y - 21,7,18,3);
		
	//sleeves
	rect(gameChar_x-15.5, gameChar_y - 52, 6,18,3);
	rect(gameChar_x+8.5, gameChar_y - 52, 6,18,3);

	//robe
	fill(83,96,140);
	triangle(gameChar_x - 9,gameChar_y - 57, gameChar_x + 8,gameChar_y - 57, gameChar_x,gameChar_y - 68);
	rect (gameChar_x - 9,gameChar_y - 57,17,32);

	//scarf
	fill(76,19,11);
	rect(gameChar_x - 5,gameChar_y - 65, 10,20,5);

	//headscarf
	fill (149,29,39);
	circle(gameChar_x,gameChar_y - 68,16.5);
	triangle(gameChar_x - 8,gameChar_y - 66, gameChar_x + 8,gameChar_y - 66, gameChar_x,gameChar_y - 56);

	//face
	fill(36,36,28);
	rect(gameChar_x - 5,gameChar_y - 71, 10,5,3);


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

	
	//undergarments
	fill(48,49,77);
	rect(gameChar_x - 8,gameChar_y - 26,7,27,3);
	rect(gameChar_x,gameChar_y - 26,7,15,3);
	rect(gameChar_x,gameChar_y - 15,15,7,3);

	//robe
	fill(83,96,140);
	triangle(gameChar_x - 9,gameChar_y - 57, gameChar_x + 8,gameChar_y - 57, gameChar_x+8,gameChar_y - 68);
	rect (gameChar_x - 8,gameChar_y - 57,16,36);
	triangle(gameChar_x-8,gameChar_y - 57, gameChar_x-8,gameChar_y - 21, gameChar_x - 16,gameChar_y - 30);
	triangle(gameChar_x + 8, gameChar_y - 57, gameChar_x + 8, gameChar_y - 21, gameChar_x + 15, gameChar_y - 30);

	//scarf
	fill(76,19,11);
	rect(gameChar_x - 7,gameChar_y - 65, 5,20,5);
	rect(gameChar_x+2,gameChar_y - 65, 5,20,5);
	rect(gameChar_x - 7,gameChar_y - 62, 10,8,5);

	//sleeve
	fill(48,49,77);
	rect(gameChar_x-2, gameChar_y - 56, 5,28,3);

	//headscarf
	fill (149,29,39);
	circle(gameChar_x,gameChar_y - 68,16.5);
	triangle(gameChar_x - 8,gameChar_y - 66, gameChar_x + 6,gameChar_y - 63, gameChar_x-8,gameChar_y - 56);

	//face
	fill(36,36,28);
	rect(gameChar_x-8,gameChar_y - 71, 8,5,3);
	


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...


	//undergarments
	fill(48,49,77);
	rect(gameChar_x,gameChar_y - 26,7,27,3);
	rect(gameChar_x - 8,gameChar_y - 26,7,15,3);
	rect(gameChar_x - 16,gameChar_y - 15,15,7,3);

	//robe
	fill(83,96,140);
	triangle(gameChar_x - 8.5,gameChar_y - 57, gameChar_x + 8,gameChar_y - 57, gameChar_x-8.5,gameChar_y - 68);
	rect (gameChar_x - 8,gameChar_y - 57,16,36);
	triangle(gameChar_x-8,gameChar_y - 57, gameChar_x-8,gameChar_y - 21, gameChar_x - 16,gameChar_y - 30);
	triangle(gameChar_x + 8, gameChar_y - 57, gameChar_x + 8, gameChar_y - 21, gameChar_x + 15, gameChar_y - 30);

	//scarf
	fill(76,19,11);
	rect(gameChar_x - 7,gameChar_y - 65, 5,20,5);
	rect(gameChar_x+2,gameChar_y - 65, 5,20,5);
	rect(gameChar_x - 7,gameChar_y - 62, 10,8,5);

	//sleeve
	fill(48,49,77);
	rect(gameChar_x-2, gameChar_y - 56, 5,28,3);

	//headscarf
	fill (149,29,39);
	circle(gameChar_x,gameChar_y - 68,16.5);
	triangle(gameChar_x - 8,gameChar_y - 66, gameChar_x + 8,gameChar_y - 65, gameChar_x+8,gameChar_y - 56);

	//face
	fill(36,36,28);
	rect(gameChar_x,gameChar_y - 71, 8,5,3);


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
	
	
	//undergarments
	fill(48,49,77);
	beginShape();
	vertex(gameChar_x,gameChar_y - 26);
	vertex(gameChar_x + 8,gameChar_y - 26);
	vertex(gameChar_x + 20,gameChar_y);
	vertex(gameChar_x + 14, gameChar_y);
	vertex(gameChar_x,gameChar_y - 26);
	endShape();
	rect(gameChar_x - 8,gameChar_y - 26,7,15,3);
	rect(gameChar_x - 16,gameChar_y - 15,15,7,3);

	//robe
	fill(83,96,140);
	triangle(gameChar_x - 8.5,gameChar_y - 57, gameChar_x + 8,gameChar_y - 57, gameChar_x-8.5,gameChar_y - 68);
	rect (gameChar_x - 8,gameChar_y - 57,16,36);
	triangle(gameChar_x-8,gameChar_y - 57, gameChar_x-8,gameChar_y - 21, gameChar_x - 16,gameChar_y - 30);
	triangle(gameChar_x + 8, gameChar_y - 57, gameChar_x + 8, gameChar_y - 21, gameChar_x + 15, gameChar_y - 30);

	//scarf
	fill(76,19,11);
	rect(gameChar_x - 7,gameChar_y - 65, 5,20,5);
	rect(gameChar_x+2,gameChar_y - 65, 5,20,5);
	rect(gameChar_x - 7,gameChar_y - 62, 10,8,5);

	//sleeve
	fill(48,49,77);
	rect(gameChar_x-2, gameChar_y - 56, 5,20,3);
	beginShape();
	vertex(gameChar_x,gameChar_y -42);
	vertex(gameChar_x,gameChar_y -35);
	vertex(gameChar_x +18,gameChar_y-52);
	vertex(gameChar_x +11, gameChar_y-52);
	vertex(gameChar_x,gameChar_y -42);
	endShape();

	//headscarf
	fill (149,29,39);
	circle(gameChar_x,gameChar_y - 68,16.5);
	triangle(gameChar_x - 8,gameChar_y - 66, gameChar_x + 8,gameChar_y - 65, gameChar_x+8,gameChar_y - 56);

	//face
	fill(36,36,28);
	rect(gameChar_x,gameChar_y - 71, 8,5,3);


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

	
	//undergarments
	fill(48,49,77);
	beginShape();
	vertex(gameChar_x,gameChar_y - 26);
	vertex(gameChar_x -8,gameChar_y - 26);
	vertex(gameChar_x -19,gameChar_y);
	vertex(gameChar_x -13, gameChar_y);
	vertex(gameChar_x,gameChar_y - 26);
	endShape();
	//rect(gameChar_x - 8,gameChar_y - 26,7,27,3);
	rect(gameChar_x,gameChar_y - 26,7,15,3);
	rect(gameChar_x,gameChar_y - 15,15,7,3);

	//robe
	fill(83,96,140);
	triangle(gameChar_x - 9,gameChar_y - 57, gameChar_x + 8,gameChar_y - 57, gameChar_x+8,gameChar_y - 68);
	rect (gameChar_x - 8,gameChar_y - 57,16,36);
	triangle(gameChar_x-8,gameChar_y - 57, gameChar_x-8,gameChar_y - 21, gameChar_x - 16,gameChar_y - 30);
	triangle(gameChar_x + 8, gameChar_y - 57, gameChar_x + 8, gameChar_y - 21, gameChar_x + 15, gameChar_y - 30);

	//scarf
	fill(76,19,11);
	rect(gameChar_x - 7,gameChar_y - 65, 5,20,5);
	rect(gameChar_x+2,gameChar_y - 65, 5,20,5);
	rect(gameChar_x - 7,gameChar_y - 62, 10,8,5);

	//sleeve
	fill(48,49,77);
	rect(gameChar_x-2, gameChar_y - 56, 5,20,3);
	beginShape();
	vertex(gameChar_x,gameChar_y -44);
	vertex(gameChar_x,gameChar_y -36);
	vertex(gameChar_x-18, gameChar_y-52);
	vertex(gameChar_x-11, gameChar_y-52);
	vertex(gameChar_x,gameChar_y -44);
	endShape();

	//headscarf
	fill (149,29,39);
	circle(gameChar_x,gameChar_y - 68,16.5);
	triangle(gameChar_x - 8,gameChar_y - 66, gameChar_x + 6,gameChar_y - 63, gameChar_x-8,gameChar_y - 56);

	//face
	fill(36,36,28);
	rect(gameChar_x-8,gameChar_y - 71, 8,5,3);


}
