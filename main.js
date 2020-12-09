const mainCanvas = document.querySelector(".mainCanvas");
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;
const context = mainCanvas.getContext("2d");
let snowflakes = [];

class Snowflake {
  constructor(positionX, positionY, size, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    context.beginPath();
    context.arc(this.positionX, this.positionY, this.size, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  setCoordinates(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  }

  getCoordinates() {
    return {
      positionX: this.positionX,
      positionY: this.positionY,
    };
  }
}

const makeSnowFlakes = () => {
  for (let i = 0; i < 100; i++) {
    const flake = new Snowflake(
      Math.floor(Math.random() * mainCanvas.width - 100),
      Math.floor(Math.random() * 1000 - 1000),
      Math.random() * 5 + 0.01,
      "#d3d3d3"
    );
    flake.draw();
    snowflakes.push(flake);
  }
  update();
};

const update = () => {
  context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  for (let i = 0; i < snowflakes.length; i++) {
    let { positionX, positionY } = snowflakes[i].getCoordinates();

    positionY += Math.random() + 1;
    positionX += Math.floor(Math.random() * 0.5);

    snowflakes[i].setCoordinates(positionX, positionY);
    snowflakes[i].draw();
  }

  console.log(snowflakes);

  window.requestAnimationFrame(update);
};

document.addEventListener("DOMContentLoaded", () => makeSnowFlakes());
