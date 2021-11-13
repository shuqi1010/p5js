let m = 0;
let s = 0;  //randomseed
function setup() {
  // put setup code here
  createCanvas(600, 600);
  frameRate(2);
}

function draw(){
  let c = color(117, 170, 235);
  let d = color(232, 107, 111);
  s = s + 1;
  if (s < 100) {
    let x = 100;
    let y = 100;
    let a = 0;
    let b = 0;
    m = 20;  //the range of randomness
  
    background(255);
    randomSeed(s);
    rectMode(CENTER);
  
    for (i = 0; i < 5; i++){
      for (j = 0; j < 5; j++){
        push();
        blendMode(MULTIPLY);
        a = random(-m,m);
        
        noStroke();
        fill (c);
        shearX(a/200);
        shearY(a/180);
        rect(x,y,30,50);
       
        blendMode(MULTIPLY);
        b = random(-m,m);
        
        noStroke();
        fill (d);
        shearX(a/180);
        shearY(b/200);
        rect(x,y,50,30);
        
        x = x + 100;
        pop(); 
      }
      x = x - 500;
      y = y + 100;
        
    }
  }
}

