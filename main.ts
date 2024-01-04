input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    gradual_bloom = 0
    for (let index = 0; index < 90; index++) {
        hummingbird.setPositionServo(FourPort.One, gradual_bloom)
        basic.pause(20)
        gradual_bloom += 1
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        100,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.One,
        100,
        0,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
        basic.pause(100)
    }
})
let gradual_bloom = 0
hummingbird.startHummingbird()
basic.showString("Flower v1.1")
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
    `)
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, hummingbird.getSensor(SensorType.Dial, ThreePort.One))
    hummingbird.setLED(ThreePort.Two, 100 - hummingbird.getSensor(SensorType.Dial, ThreePort.One))
    hummingbird.setTriLED(
    TwoPort.One,
    hummingbird.getSensor(SensorType.Dial, ThreePort.One),
    0,
    100 - hummingbird.getSensor(SensorType.Dial, ThreePort.One)
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    hummingbird.getSensor(SensorType.Dial, ThreePort.One),
    0,
    100 - hummingbird.getSensor(SensorType.Dial, ThreePort.One)
    )
    hummingbird.setPositionServo(FourPort.One, input.acceleration(Dimension.X) / 25)
})
