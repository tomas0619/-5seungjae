input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        # . # . #
        # . . . .
        # . # # .
        . # . . .
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # .
        # . # . #
        . . . . #
        . # # . #
        . . . . #
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
	
})
