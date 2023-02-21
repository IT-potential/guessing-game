const { diff } = require("semver");

class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        if (this.min < this.max)
            return Math.ceil((this.max + this.min) / 2)
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}
module.exports = GuessingGame;
// let number = 15;
// let game = new GuessingGame();
// console.log(game);
// game.setRange(0, 20)

// console.log(game);
// let result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();


// console.log(result, number);
