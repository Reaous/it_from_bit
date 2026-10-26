import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    width : 640,
    height: 360,
    letterbox:true,
    background: [8,8,6],
});

k.loadRoot("./"); 
k.loadSprite("crt","sprites/crt.png")
k.loadSprite("cursor","sprites/cursor.png")


k.scene("menu", ()=> {

    k.add([
        k.rect(700,200),
        k.color(rgb(117, 77, 18)),
        k.pos(0,180)
    ])


    k.add([
        k.sprite("crt"),
        k.pos(200,50),
        k.scale(1.5)

    ])

    k.add([
        k.sprite("cursor"),
        k.pos(250,150),
        k.scale(2)
    ])








})

k.go("menu")