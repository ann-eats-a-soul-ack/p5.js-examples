let x = [];
let y = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Times");
  // textSize(20);

  for (let s = 0; s < 500; s++) {
    x[s] = random(-2000, -25);
    y[s] = random(height);
  }

}

function draw() {
  background(0, 0, 40);

  //stars & text colour & size
  fill(200, 160, 100);
  textSize(17);
  
  //var  = 10; 
//for (int i = 0; I <s.length(); i++) {
//char c = s.charAt(i); 
//fill(random(255)); 
//text(c, x, 200);
  
  

  //stars animation
  for (let s = 0; s < x.length; s++) {
    x[s] += 2;
    //stars & text position on screen
    text("*", x[s], y[s]);
    text("I want to be the chicken of the woods mushroom\n\nthe tastiest, when cooked properly\n\nit looks just like chicken\n\nI want to look like what you want\n\neven if I'm not it/never will be/even\n\nif it's just a ruse, even if\n\nit only takes a minute for you to know\n\nI'm lying, again", 100, 50);
  }
  
 // if (x.length == width) {
  if (mouseIsPressed) {
    text("even the stars are heavy from trying to be seen", 800, 300);
    for (let s = 0; s < x.length; s++) {
      x[s] += 2;

      //ampersands
      text("&", x[s], y[s]);
      
    }
    
   
  } 
}