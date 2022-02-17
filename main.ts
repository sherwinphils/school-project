pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    let light1 = pins.P2.analogRead()
if (light1 >= 500) {
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
