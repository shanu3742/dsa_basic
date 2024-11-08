const ConcreteParticleFlyweight = require("./ConcreteParticleFlyweight");

// Flyweight Factory
class ParticleFlyweightFactory {
    constructor() {
      this.flyweights = new Map();
    }
  
    getFlyweight(color, shape, size) {
      const key = `${color}-${shape}-${size}`;
      if (!this.flyweights.has(key)) {
        this.flyweights.set(key, new ConcreteParticleFlyweight(color, shape, size));
      }
      return this.flyweights.get(key);
    }
  
    getFlyweightCount() {
      return this.flyweights.size;
    }
  }

  module.exports=ParticleFlyweightFactory;