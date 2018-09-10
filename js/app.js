//Enemy class that holds all the properties of enemy, ie, image, position on canvas and random number generated saved in movement propery
var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 60;
    this.movement = Math.floor(Math.random() * 400) + 200;
}

// If Enemy reaches towards the boundary of the canvas, position of enemy is reset to start position and speed of enemy is generated randomly.
// Further, for smoother enemy movement across canvas, it is multiplied by dt parameter
Enemy.prototype.update = function(dt) {
  if (this.x >= 505) {
    this.x = 0;
    this.movement = Math.floor(Math.random() * 400) + 200;
  }
  this.x += this.movement * dt;
}

// Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Player class that holds properties of image, starting x and y positions, and increment values when player is moved on screen.
var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 400;
  this.xMovement = 100;
  this.yMovement = 82;

}

// Draws player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// HandleInput function to add or subtract movement value from player's current position
Player.prototype.handleInput = function(keyPressed) {
  if (keyPressed === 'left') {
    if (this.x != 0) {
      this.x -= this.xMovement;
    }
  } else if (keyPressed === 'right') {
    if (this.x != 400) {
      this.x += this.xMovement;
    }
  } else if (keyPressed === 'up') {
    if (this.y != -10) {
      this.y -= this.yMovement;
    }
  } else if (keyPressed === 'down') {
    if (this.y != 400) {
      this.y += this.yMovement;
    }
  }
}

//getDistance function to calculate the distance between one object and other object on screen

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

//If distance between player and enemy is less then 60, then player is set to original position
//If player wins, player is again reset to original position

Player.prototype.update = function() {
  if (getDistance(this.x, this.y, enemy3.x, enemy3.y) <= 60) {
    this.x = 200;
    this.y = 400;
  }
  if (getDistance(this.x, this.y, enemy2.x, enemy2.y) <= 60) {
    this.x = 200;
    this.y = 400;
  }
  if (getDistance(this.x, this.y, enemy1.x, enemy1.y) <= 60) {
    this.x = 200;
    this.y = 400;
  }
  if (this.y === -10) {
    this.x = 200;
    this.y = 400;
  }

}

//Instantiating player and enemy objects

let player = new Player();
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();

//Setting y coordinates for enemy2 and enemy3
enemy2.y = 145;
enemy3.y = 230;


// allEnemies array containing enemies

let allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
