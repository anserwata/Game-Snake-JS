
let snake;
let food;
let points;
let snakeSpeed = 5;

function setup() {
    game_background = new GameBackground(400, 400);
    points = 0;
    setGame();
    setButtons();
}

function draw() {
    background(0); 
    runGame();
}

function setGame() {
    let snakeSpeed = 5;
    snake = new Snake();
    snake.setSpeed(snakeSpeed);
    
    foodLocation();
}

function runGame() {
    if (snake.eat(food)) {
        points += 1;
        foodLocation();
    }

    snake.update();
    snake.show();

    if (snake.die(game_background)) {
        background(255, 0, 0); 
        game_background.dispayGameOver();

        noLoop();

        food = undefined;

        alert(`Oops! Died.\n Your score ${points}`);
    }
    
    stroke(255, 105, 180);
    fill(255, 20, 147);
    rect(food.x, food.y, 10, 10);
}

function newGame() {
    location.reload();
}

function setButtons() {
    buttonRestart = createButton("Restart Game!");
    buttonRestart.mousePressed(newGame);
    buttonRestart.position(game_background.width/4, game_background.height+20);

    buttonSpeedSnake = createButton("Speed snake!");
    buttonSpeedSnake.mousePressed(speedUpSnake);
    buttonSpeedSnake.position(game_background.width/2, game_background.height+20);
}

function speedUpSnake(speed) {
    snakeSpeed += 5;
    snake.setSpeed(snakeSpeed);
}

function keyPressed() {
    switch(keyCode) {
        case LEFT_ARROW:
            snake.setDir(-1, 0);
            break;
        case RIGHT_ARROW:
            snake.setDir(1, 0);
            break;
        case UP_ARROW:
            snake.setDir(0, -1);
            break;
        case DOWN_ARROW:
            snake.setDir(0, 1);
            break;
    }
}

function foodLocation() {
    let scale = snake.snakeScale;

    let x = floor(random(floor(game_background.height/scale))) * scale;
    let y = floor(random(floor(game_background.width/scale))) * scale;

    food = createVector(x, y);
}