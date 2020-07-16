input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
let y = 0
let x = 0
x = -1
led.plot(x, y)
let dir = 1
basic.forever(function () {
    led.unplot(x, y)
    x += dir
    led.plot(x, y)
    basic.pause(200)
    if (x >= 4) {
        dir = -1
    } else if (x <= 0) {
        dir = 1
    }
})
