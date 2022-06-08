function newGuess () {
    currentGuess = lowGuess + Math.floor((highGuess - lowGuess) / 2)
}
input.onButtonPressed(Button.A, function () {
    lowGuess = currentGuess
    newGuess()
})
input.onButtonPressed(Button.AB, function () {
    inGame = 0
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    basic.clearScreen()
    reset()
})
input.onButtonPressed(Button.B, function () {
    highGuess = currentGuess
    newGuess()
})
function reset () {
    lowGuess = 0
    highGuess = 101
    currentGuess = 50
    inGame = 1
}
let inGame = 0
let highGuess = 0
let lowGuess = 0
let currentGuess = 0
reset()
basic.forever(function () {
    if (inGame == 1) {
        basic.showNumber(currentGuess)
    }
})
