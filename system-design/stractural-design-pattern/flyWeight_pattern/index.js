const Particle = require("./Particle");
const ParticleFlyweightFactory = require("./ParticleFlyweightFactory");

  // Main Simulation
  const particleFactory = new ParticleFlyweightFactory();
  const particles = [];
  const NUM_PARTICLES = 1000;
  const canvasWidth = 800;
  const canvasHeight = 600;
  
  // Create particles with shared flyweights but unique positions and velocities
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const color = i % 3 === 0 ? 'red' : i % 3 === 1 ? 'green' : 'blue';
    const shape = i % 2 === 0 ? 'circle' : 'square';
    const size = i % 2 === 0 ? 5 : 10;
  
    // Retrieve shared flyweight instance
    const flyweight = particleFactory.getFlyweight(color, shape, size);
    // Create unique particle with shared flyweight
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    const velocityX = (Math.random() - 0.5) * 2;
    const velocityY = (Math.random() - 0.5) * 2;
    particles.push(new Particle(x, y, velocityX, velocityY, flyweight));
  }
  
  // Simulate and render particles
  function simulate() {
    particles.forEach((particle) => {
      particle.update();
      particle.render();
    });
  
    console.log(`Total flyweights created: ${particleFactory.getFlyweightCount()}`);
  }
  
  // Run Simulation
  simulate();
  