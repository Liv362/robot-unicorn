basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.pause(1000)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(1000)
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        pins.analogWritePin(AnalogPin.P0, 10)
        pins.analogWritePin(AnalogPin.P1, 100)
        basic.pause(3000)
        pins.analogWritePin(AnalogPin.P0, 100)
        pins.analogWritePin(AnalogPin.P1, 10)
        basic.pause(3000)
    }
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    for (let index = 0; index < 2; index++) {
        pins.analogWritePin(AnalogPin.P0, 20)
        pins.analogWritePin(AnalogPin.P1, 20)
        basic.pause(3000)
        pins.analogWritePin(AnalogPin.P0, 80)
        pins.analogWritePin(AnalogPin.P1, 80)
        basic.pause(3000)
    }
})
