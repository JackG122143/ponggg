namespace SpriteKind {
    export const ball = SpriteKind.create()
}
sprites.onCreated(SpriteKind.ball, function (sprite) {
    sprite.setImage(img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 2 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 2 3 a b 
        . b 3 3 3 2 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 2 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 2 3 3 d a 4 4 e 
        a 3 3 2 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (Math.percentChance(50)) {
        sprite.vx = 75
    } else {
        sprite.vx = -75
    }
    sprite.vy = randint(-75, 75)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    otherSprite.vx = object.vx * -1.1
    pause(200)
    otherSprite.setFlag(SpriteFlag.Ghost, false)
    otherSprite.vy += otherSprite.vx * 0.22
})
let object: Sprite = null
let player1 = sprites.create(img`
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1, 0, 100)
player1.x = 0
player1.setStayInScreen(true)
info.setScore(0)
let player2 = sprites.create(img`
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    . . . . . . . . . . . 8 8 8 8 8 
    `, SpriteKind.Player)
controller.player2.moveSprite(player2, 0, 100)
player2.x = scene.screenWidth()
player2.setStayInScreen(true)
info.player2.setScore(0)
object = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.ball)
game.onUpdate(function () {
    if (object.x < 0) {
        object.destroy()
        info.player2.changeScoreBy(1)
        pause(200)
        object = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ball)
    } else if (object.x > scene.screenWidth()) {
        object.destroy()
        info.player1.changeScoreBy(1)
        pause(200)
        object = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.ball)
    } else {
    	
    }
})
game.onUpdate(function () {
    if (object.y <= 0) {
        object.y = 0
        object.vy = object.x * -1
    } else if (object.y > scene.screenHeight()) {
        object.y = scene.screenHeight()
        object.vy = object.vy * -1
    } else if (false) {
    	
    }
})
