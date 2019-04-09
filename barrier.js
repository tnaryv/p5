//var randomSize = (Math.random() * 50);
function barrier() {
  this.height = (Math.random() * 50 + 50);
  this.width = (Math.random() * 50 + 50);
  this.x = w + this.width;
  this.y = (Math.random() * h);
  this.leftPull = 0.5; //the force of gravity
  this.velocity = Math.floor(Math.random() * 1); //speed of the gravity
  this.point = 0;
      
  this.show = function() {
    this.x;
    this.y;
    fill(color('red'));
    rect(this.x, this.y, this.width, this.height);
  }

  this.update = function() {
    this.velocity += this.leftPull;
    this.x -= this.velocity;
    if (this.x < (0-this.width)) {
      this.height = (Math.random() * 50 + 50);
      this.width = (Math.random() * 50 + 50);
      this.x = w + this.width;
      this.y = (Math.random() * h);
      this.velocity = Math.floor(Math.random() * 1);
      this.point += 1;
      document.getElementById("pointCount").innerHTML = this.point;
    }
  }
}
    


//randomly appear, fly in from right to left