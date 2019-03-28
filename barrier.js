//var randomSize = (Math.random() * 50);

function barrier() {
  this.height = (Math.random() * 50);
  this.width = (Math.random() * 50);
  this.x = w + this.width;
  this.y = (Math.random() * h);
  this.leftPull = 1; //the force of gravity
  this.velocity = Math.floor(Math.random() * 5); //speed of the gravity
      
  this.show = function() {
    this.x;
    this.y;
    fill(color('red'));
    rect(this.x, this.y, this.width, this.height);
  }

  this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
  }
}
    


//randomly appear, fly in from right to left