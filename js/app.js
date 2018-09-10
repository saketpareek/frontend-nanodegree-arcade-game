// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 60;
    this.movement = Math.floor(Math.random() * 400) + 200;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if (this.x >= 505) {
    this.x = 0;
    this.movement = Math.floor(Math.random() * 400) + 200;
  }
  this.x += this.movement * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 400;
  this.xMovement = 100;
  this.yMovement = 82;

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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

};

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

};

let player = new Player();
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();


enemy2.y = 145;
enemy3.y = 230;


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

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
