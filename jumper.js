function jumper() {
  this.x = 50;
  this.y = 0;
  this.gravity = 0.5; //the force of gravity
  this.lift = -10; //opposing force
  this.velocity = 0; //speed of the gravity
      
  this.show = function() {
    fill(color('black'));
    ellipse(this.x, this.y, 50, 50);
  }
      
  this.move = function() {
    if ((keyIsDown(37)) && (this.x > 30)) {
      this.x -= 10;
    }
    if ((keyIsDown(39)) && (this.x < (w-30))) {
      this.x += 10;
    }
  }
      
  this.up = function() {
    this.velocity += this.lift; //when i go up, i am going to oppose the gravity by -10
  }
      
  this.update = function() {
    this.velocity += this.gravity; //gravity affects velocity, velocity is speed ()
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    if (this.y > (h-30)) { //stop on floor
      this.y = (h-30);
      this.velocity = 0;
    }
    if (this.y < 0) { //stop on ceiling
      this.y = 0;
      this.velocity = 0;
    }
  }
}
    
function keyPressed() {
  if (keyCode === 32) {
    jumper.up();
  }
}