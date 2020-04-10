class Player{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.size = 100;
    this.x = canvas.width / 2;
    this.y = 200;
  }

  draw () {
    this.ctx.fillStyle = 'lightskyblue';
    // fillRect(x, y, width, height)
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

}