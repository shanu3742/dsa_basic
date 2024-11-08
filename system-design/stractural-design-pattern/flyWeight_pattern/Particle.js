 // Particle Class (Context)
 class Particle {
    constructor(x, y, velocityX, velocityY, flyweight) {
      this.x = x;
      this.y = y;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.flyweight = flyweight;
    }
  
    update() {
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  
    render() {
      this.flyweight.render(this.x, this.y);
    }
  }

  module.exports=Particle;