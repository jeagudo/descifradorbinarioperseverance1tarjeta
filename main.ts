// Introducimos un 1
input.onButtonPressed(Button.A, function () {
    bits = bits - 1
    Numero = Numero + 2 ** bits
    basic.showNumber(1)
    if (bits == 0) {
        basic.showArrow(ArrowNames.East)
        if (convertirALetra) {
            basic.showString("" + (LETRAS[Numero]))
        } else {
            basic.showNumber(Numero)
        }
        bits = NumeroBits
        Numero = 0
    }
})
// Cambiamos a descifrar número o Letra
input.onButtonPressed(Button.AB, function () {
    if (convertirALetra) {
        convertirALetra = false
        basic.showString("123")
    } else {
        convertirALetra = true
        basic.showString("ABC")
    }
})
// Introducimos un 0
input.onButtonPressed(Button.B, function () {
    bits = bits - 1
    basic.showNumber(0)
    if (bits == 0) {
        basic.showArrow(ArrowNames.East)
        if (convertirALetra) {
            basic.showString("" + (LETRAS[Numero]))
        } else {
            basic.showNumber(Numero)
        }
        bits = NumeroBits
        Numero = 0
    }
})
let LETRAS: string[] = []
let convertirALetra = false
let Numero = 0
let bits = 0
let NumeroBits = 0
NumeroBits = 7
bits = NumeroBits
// Número decimal a calcular
Numero = 0
convertirALetra = false
LETRAS = ["-", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
