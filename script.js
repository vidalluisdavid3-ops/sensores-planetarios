javascript
// script.js

const canvas = document.getElementById('sensorCanvas');
const ctx = canvas.getContext('2d');

let sensors = [];

for (let i = 0; i < 10; i++) {
  sensors.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 2, // viento
    vy: (Math.random() - 0.5) * 2
  });
}

function updateSensors() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  sensors.forEach(sensor => {
    sensor.x += sensor.vx;
    sensor.y += sensor.vy;

 // rebote en bordes
    if (sensor.x <= 0 || sensor.x >= canvas.width) sensor.vx *= -1;
    if (sensor.y <= 0 || sensor.y >= canvas.height) sensor.vy *= -1;

    // dibujar sensor
    ctx.beginPath();
    ctx.arc(sensor.x, sensor.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
  });

  requestAnimationFrame(updateSensors);
}

updateSensors();
