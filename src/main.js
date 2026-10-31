import kaplay from "kaplay";
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({
    width : 640,
    height: 360,
    letterbox:true,
    background: [8,8,6],
});

k.loadRoot("./"); 

k.loadFont("dos","font/ModernDOS9x16.ttf")

k.loadSound("boot","audio/boot.mp3")
k.loadSound("clown","audio/scream.mp3")
k.loadSound("trumpetb","audio/trumpetb.mp3")


k.loadSprite("crt","sprites/crt.png")
k.loadSprite("menu","sprites/menu.png")
k.loadSprite("bg2","sprites/bg2.jpg")
k.loadSprite("crtbg","sprites/crtbg.png")


//gifssssssss (hope not a headache lets pray)

k.loadSprite("clown","gif/clown.png",{
    sliceX: 4,
    sliceY: 3,
    anims: {
        normal : { from: 0,to:11 , loop:true}
    }})
k.loadSprite("skull","gif/skull.png",{
    sliceX:4,
    sliceY:4,
    anims:{
        normal : {from:0,to:13,loop:true}
    }
})

let iscursed =false
const gifs = [ {name:"clown",iscursed:false,sound:"clown",activity :"none"},
    {name:"skull",iscursed:true,sound:"trumpetb",activity:"light_out"}
]




k.scene("main", ()=> {

    k.add([
        k.rect(700,200),
        k.color(rgb(117, 77, 18)),
        k.pos(0,180)
    ])


    const crt = k.add([
        k.sprite("crt"),
        k.pos(150,30),
        k.scale(2.3)

    ])

        const menu =crt.add ([
        k.sprite("menu",{width:115,height:82}),
        k.pos(19,17)
        
    ])


    const text =crt.add([
        k.text("IT FROM BIT\n-Reaous\nStart by pressing ENTER\n &**$*@#(*@\n(!$$&@@($*&let\nus3218742984293FREE",{font:"dos",size:8}),
        k.pos(30,40)
        
    ]);

    let audio=false;
    k.onKeyPress("enter",()=>{
    if (audio===false) {
        const boot =k.play("boot",{volume:0.5})
        audio=true
        k.wait(1,()=> {
        boot.paused=true;
        k.go("plot");
        })}})
    

});


k.scene("plot",()=> {

    k.add([
        k.text("(Press enter)",{size:12,font:"dos"}),
        k.pos(300,0)
    ])
    
    const text1 =k.add([
        k.opacity(0),
        k.text("1989",{font:"dos"}),
        k.z(0),
        k.pos(50,30),
        "t1"
        
    ])

    const text2=k.add([
        k.text("The invention of bits and world wide web connected\nmankind to every nook and crany of the world.",{size:16 ,font :"dos"}),
        k.pos(text1.pos.x,text1.pos.y +40),
        k.opacity(0),
        "t1"
    ])

    const text3=k.add([
        k.text("But people started noticing strage phenomena , \nwhere it seems bits were altered by something(?)\nin a way which made....communication .",{size:16,font:"dos"}),
        k.pos(text2.pos.x,text2.pos.y +40),
        k.opacity(0),
        "t1"


    ])

    const text4=k.add([
        k.text("The smartest minds couldnt figure out , and the theologists came.\nThey preached it was god.they worshipped it like a cult\n,until IT started asking for sacrifices and \nsome kind of RETURN.",{size:16,font:"dos"}),
        k.pos(text3.pos.x,text3.pos.y +60),
        k.opacity(0),
        "t1"

    ])

    const text5=k.add([
        k.text("Gif are most vulnerable to {them} since \nits small and easy to corrupt.",{size:16,font:"dos"}),
        k.pos(text3.pos.x,text3.pos.y +150),
        k.opacity(0),
        "t1"

    ])


    const text6=k.add([
        k.text("DETECT AND STOP THEM .",{size:30,font:"dos"}),
        k.pos(200,50),
        k.opacity(0),
        k.rotate(40),
    ])

    k.tween(0,1,1,(opa) => (text1.opacity=opa));

    let te 
    let enter=1
    k.onKeyPress("enter",()=> {
    enter++
    if (enter===2){
    k.tween(0,1,1,(opa) => (text2.opacity=opa))}
    if (enter===3){
    k.tween(0,1,1,(opa) => (text3.opacity=opa))}
    if (enter===4){
    k.tween(0,1,1,(opa) => (text4.opacity=opa))}
    if (enter===5){
    k.tween(0,1,1,(opa) => (text5.opacity=opa))}
    if (enter===6){
    k.destroyAll("t1");
    k.shake(10)
    k.tween(0,1,1,(opa) => (text6.opacity=opa))}
    if (enter === 7){
        k.go("game")
    }
});

})


k.scene("game",()=> {

//todo: fix the art of fish eye bg of computer and the pc not mathcing up , im too damn tired

let currentaudio;
let currentIndex=0

k.add([
    k.sprite("bg2", {width:k.width(),height:k.height()})
]);

const crt = k.add([
    k.sprite("crt"),
    k.pos(200,130),
    k.scale(1.5),

])

const bg = crt.add([
    k.sprite("crtbg"),
    k.scale(0.35),
    k.pos(-10,10)
])

const tutorialtext= k.add([
    k.text("Press left arrow to report , Right arrow to approve the gifs\nRemember if you find anything weird REPORT.", {size:16,font:"dos"}),
    k.pos(80,5)
])




const gifscreen = () => {
k.destroyAll("active")

const current = gifs[currentIndex]

bg.add([
    k.sprite(current.name,{anim:"normal"}),
    k.pos(150,70),

    "active"
])


 currentaudio =k.play(current.sound)

};

gifscreen();


k.onKeyPress("w",()=> {
    currentIndex++
    currentaudio.paused=true;
    gifscreen();
});

});



k.scene("shaders",()=> {
const light = ()=> ({
    "u_radius" :10 ,
    "u_blur" : 10 ,
    "u_resolution" :k.vec2(k.width(),k.height()),
    "u_mouse" :k.mousePos()

})

k.loadShaderURL("light", null,'shader/light.frag')


const screen = ()=>({
    "u_intensity" :12

})

k.loadShaderURL("screen",null,"shader/crt.frag")

k.usePostEffect("screen",screen())

k.onUpdate(()=> {
    k.usePostEffect("light",light())

})
});


//change desitnation after doing scene of game
k.go("main")