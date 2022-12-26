let clock = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (clock < 8) {
        clock += 1
    }
})
basic.forever(function () {
    if (clock >= 8) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(200)
        clock = 0
    } else {
        basic.pause(100)
        clock = 1
    }
})
