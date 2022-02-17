pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    let light = pins.P2.analogRead()
    if (light >= 500) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    console.log("Pressed")
})
