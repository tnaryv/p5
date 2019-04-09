function platform() {
  this.height = (Math.floor((Math.random() * 250)+ 50));
  this.width = (Math.floor((Math.random() * 250)+ 50));
  this.x = w + this.width;
  this.y = h - this.height;
  this.leftPull = 0.1; //the force of gravity
  this.velocity = Math.floor(Math.random() * 1); //speed of the gravity
      
  this.show = function() {
    this.x;
    this.y;
    fill(color('blue'));
    rect(this.x, this.y, this.width, this.height);
  }

  this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
    if (this.x < (0-this.width)) {
      this.height = (Math.floor((Math.random() * 250)+ 50));
      this.width = (Math.floor((Math.random() * 250)+ 50));
      this.x = w + this.width;
      this.y = h - this.height;
      this.velocity = Math.floor(Math.random() * 1);
    }
  }
}