class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
  }

  start () {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Set the canvas to be same as the viewport size
    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    // Create new player
    this.player = new Player(this.canvas);

    // Add event keydown listener for the movement/interaction


    // Start the game loop
    this.startLoop();

  }


  startLoop () {
    var loop = function() {
      console.log('in loop');
      // 1. UPDATE THE STATE OF PLAYER AND ENEMIES


      // 2. CLEAR THE CANVAS
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

      
      // 3. DRAW - UPDATE THE CANVAS
      // Draw the player
      this.player.draw();


      // 4. TERMINATE THE LOOP IF THE GAME IS OVER
      if (this.gameIsOver === false) {
        window.requestAnimationFrame(loop);
      }

    }.bind(this);

    // Start the loop - initial start
    loop();
  }
}