let Flag = 0
let Temp = 0
input.onButtonPressed(Button.A, function () {
    Flag = 0
})
input.onButtonPressed(Button.B, function () {
    Flag = 1
})
basic.forever(function () {
    Temp = input.temperature()
    if (Flag == 0) {
        if (Temp < 28) {
            basic.showString("SAFETY  " + Temp)
        } else {
            basic.showString("CAUTION  " + Temp)
        }
    } else {
        if (Temp < 22) {
            basic.showString("SAFETY  " + Temp)
        } else {
            basic.showString("CAUTION  " + Temp)
        }
    }
})
