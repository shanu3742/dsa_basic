// Concrete Flyweight Class
class ConcreteParticleFlyweight {
    constructor(color, shape, size) {
      this.color = color;
      this.shape = shape;
      this.size = size;
    }
  
    render(x, y) {
      console.log(
        `Rendering particle at (x: ${x}, y: ${y}) with color: ${this.color}, shape: ${this.shape}, size: ${this.size}`
      );
    }
  }
  
  module.exports=ConcreteParticleFlyweight;;