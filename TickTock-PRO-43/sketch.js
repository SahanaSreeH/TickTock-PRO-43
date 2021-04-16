function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200); 
  rotate(-90); 
 
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  stroke("red");
  noFill();
  secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle); 

  stroke("lightgreen");
  minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle); 

  stroke("blue");
  hourAngle = map(hr % 12, 0, 12, 1, 360);
  arc(0, 0, 260, 260, 0, hourAngle); 

  push(); 
  rotate(secondAngle);
  strokeWeight(4);
  stroke("red");
  line(0, 0, 100, 0);
  pop()

  push(); 
  rotate(minuteAngle);
  strokeWeight(4);
  stroke("lightgreen");
  line(0, 0, 75, 0);
  pop()

  push(); 
  rotate(hourAngle);
  strokeWeight(4);
  stroke("blue");
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);  
}