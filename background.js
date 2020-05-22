
class GameBackground {
    constructor(width, height) {

        this.width = width;
        this.height = height;

        createCanvas(this.width, this.height);
    }

    dispayGameOver() {
        textSize(50);
        text('GAME OVER', 50, this.height/2);
    }
}