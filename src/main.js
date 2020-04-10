let game; // instance of the Game
let splashScreen; // Start Game screen
let gameScreen;  // Game Play Screen
let gameOverScreen; // Game Over screen

// Creates DOM elements from a string representation
// buildDom
function buildDom(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;

  return div.children[0];
}

// -- splash screen

function createSplashScreen() {
  splashScreen = buildDom(`
    <main>
      <h1>Game Title</h1>
      <button>Start</button>
    </main>
	`);

  document.body.appendChild(splashScreen);

  const startButton = splashScreen.querySelector("button");
  startButton.addEventListener("click", startGame);
}


// -- game screen

function createGameScreen() {
  gameScreen = buildDom(`
    <main class="game container">
      <header>
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>

        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>

      <div class="canvas-container">
        <canvas></canvas>
      </div>
    </main>
	`);

  document.body.appendChild(gameScreen);
  return gameScreen;
}


function removeScreen() {
  document.body.innerHTML = "";
}

function startGame() {
  removeScreen();
  createGameScreen();

  game = new Game();
  game.gameScreen = gameScreen;

  // Start game
  game.start();
}


window.addEventListener('load', createSplashScreen);