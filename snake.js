
class Snake {
    constructor() {
        
        this.body = [];
        this.body[0] = createVector(0, 0);

        this.xdir = 0;
        this.ydir = 0;

        this.snakeScale = 10;

    }

    getHead() {
        return this.body[this.body.length-1];
    }

    setDir(x, y) {
        this.xdir = x*this.snakeScale;
        this.ydir = y*this.snakeScale;
    }

    setSpeed(v) {
        frameRate(v);
    }

    update() {
        let head = this.getHead().copy();
        
        this.body.shift();

        head.x += this.xdir;
        head.y += this.ydir;

        this.body.push(head);
    }

    grow() {
        let head = this.getHead().copy();
        this.body.push(head);
    }

    die(backgroundSize = undefined) {
        let head = this.getHead();

        if (head.x > backgroundSize.width-1 || head.x < 0 || head.y > backgroundSize.height-1 || head.y < 0) {
            return true;
        }

        for (let i = 0; i < this.body.length-1; i++) {
            if (this.body[i].x == head.x && this.body[i].y == head.y) {
                return true;
            }
        }
    }

    eat(element) {
        let head = this.getHead();
        
        if (head.x === element.x && head.y === element.y) {
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        fill(255, 235, 215);
        noStroke();

        for (let i = 0; i < this.body.length; i++) {
            rect(this.body[i].x, this.body[i].y, this.snakeScale, this.snakeScale);
        }
        
    }
}
