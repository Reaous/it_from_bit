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

k.loadShaderURL("light", null,'shader/light.frag')

k.loadSound("voice","audio/voice.wav")
k.loadSound("impact","audio/impact.mp3")
k.loadSound("boot","audio/boot.mp3")
k.loadSound("clown","audio/clown.mp3")
k.loadSound("trumpetb","audio/trumpetb.mp3")
k.loadSound("menubg","audio/menubg.mp3")
k.loadSound("tomato","audio/tomato.mp3")
k.loadSound("pchime","audio/chimepositive.mp3")
k.loadSound("gangsta","audio/gangsta.mp3")
k.loadSound("nosig","audio/nosig.mp3")
k.loadSound("screaming","audio/scream.mp3")
k.loadSound("wave","audio/hi.mp3")
k.loadSound("smile","audio/smile.mp3")


k.loadSprite("crt","sprites/crt.png")
k.loadSprite("menu","sprites/menu.png")
k.loadSprite("bg2","sprites/bg2.jpg")
k.loadSprite("crtbg","sprites/crtbg.png")
k.loadSprite("arrow","sprites/arrow.png")
k.loadSprite("load","sprites/load.png")
//gifssssssss 

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

k.loadSprite('tomato',"gif/tomato.png",{
    sliceX:4,
    sliceY:4,
    anims:{
        normal :{from:0,to:6,loop:true}}
})

k.loadSprite("gangsta","gif/gangsta.png",{
    sliceX:5,
    sliceY:4,
    anims:{
        normal : {from:0,to:14,loop:true}
    }
})

k.loadSprite("thumb","gif/thumb.png",{
    sliceX:2,
    sliceY:1,
    anims:{
        normal : {from:0,to:1,loop:true}
    }
})

k.loadSprite("wave","gif/wave.png",{
    sliceX:4,
    sliceY:2,
    anims:{
        normal : {from:0,to:4,loop:true}
    }
})

k.loadSprite("smile","gif/smile.png",{
    sliceX:4,
    sliceY:2,
    anims:{
        normal:{from:0,to:4,loop:true}
    }
})


let iscursed ;
const gifs = [ {name:"clown",iscursed:false,sound:"clown",activity :"none"},
    {name:"skull",iscursed:true,sound:"trumpetb",activity:"screenbg"},
    {name:"tomato",iscursed:false,sound:"tomato",activity:"none"},
    {name:"gangsta",iscursed:false,sound:"gangsta",activity:"none"},
    {name:"thumb",iscursed:true,sound:"nosig",activity:"screaming"},
    {name:"wave",iscursed:false,sound:"wave",activity:"none"},
    {name:"smile",iscursed:true,sound:"smile",activity:"light"}
]

let menubg;



k.scene("main", ()=> {

    menubg =k.play("menubg");

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
        k.text("IT FROM BIT\n-Reaous\nStart by pressing ENTER\n &**$*@#(*@\n(!$$@($*&let\nus3218742984293FREE",{font:"dos",size:8}),
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
    k.play("impact",{volume:0.5})
    k.shake(10)
    k.tween(0,1,1,(opa) => (text6.opacity=opa))}
    if (enter === 7){
        menubg.paused = true;
        k.go("game")
    }
});


})


k.scene("game",()=> {

//todo: fix the art of fish eye bg of computer and the pc not mathcing up , im too damn tired

let currentaudio;
let currentIndex=0
let activity;

k.tween(0,1,1, (opa)=> (tutorialtext.opacity = opa))
let sanity = 0;
k.add([
    k.text(sanity),
    k.pos(50,200)
])

k.add([
    k.sprite("bg2", {width:k.width(),height:k.height()})
]);

const arr = k.add([
    k.sprite("arrow"),
    k.pos(330,285),
    k.scale(0.1),
    k.z(15),
    k.color(rgb(177, 169, 169))
])

const arl= k.add([
    k.sprite("arrow"),
    k.pos(320,317),
    k.scale(0.1),
    k.z(15),
    k.color(rgb(177, 169, 169)),
    k.rotate(180)
])

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
    k.text("Press left arrow to report , Right arrow to approve the gifs\nRemember if you find anything weird REPORT.\n Press ENTER to start", {size:16,font:"dos"}),
    k.pos(80,60),
    k.opacity(0)
    
])

const button = k.add([
    k.rect(30,30),
    k.pos(30,300),
    k.area(),
    "switch"
])


let current ;

let switchcontext = false;


const acitivtyscreen = () => {
    current = gifs[currentIndex]
    
    if (current.activity === "screenbg"){
    const flicker =bg.add([
    k.sprite("crtbg"),
    k.scale(1),
    k.pos(10,10),
    k.z(0),
    k.color(rgb(249, 5, 5)),
    k.opacity(0),
    "active"
     ])

    let duration = 0.1;
    k.loop(4*duration, ()=> {
    const duration =k.rand(0.13,0.15)
     k.tween(0,1,duration,(opa) => (flicker.opacity=opa))   
     k.wait(duration,()=> {
        k.tween(1,0,duration/2,(opa) => (flicker.opacity=opa));
     })
     },4)
    }

    if(current.activity === "screaming"){
        k.wait(1,()=> {
        const music =k.play("screaming")
        k.shake(2);
        k.wait(1,()=> {
            music.paused=true;

        })
    })
    }

    
if(current.activity === "light"){    
k.wait(1,()=> {
    k.shake(2);
    const light = ()=> ({
    "u_radius" :15 ,
    "u_blur" : 20 ,
    "u_resolution" :k.vec2(k.width(),k.height()),
    "u_mouse" :k.mousePos()});
    switchcontext =true ;

    k.onUpdate(()=> {
        if (switchcontext === true){
            k.usePostEffect("light",light())};

})
})
}
}

k.onClick("switch",()=> {
    if (switchcontext === false){
    const switchtext = k.add([
        k.text("The light \nis already on",{font:"dos",size:15}),
        k.pos(30,250),

    ]);
    k.tween(1,0,3,(opa) =>(switchtext.opacity=opa));
}

if (switchcontext === true){
    k.shake(2);
    k.play("voice")
    k.wait(5,()=> {
    k.usePostEffect(null);
    switchcontext = false;
    });
}
 })

        


let gifonscreen;
const gifscreen = () => {
 current = gifs[currentIndex]
gifonscreen = bg.add([
    k.sprite(current.name,{anim:"normal"}),
    k.pos(150,70),
    k.z(10),
    "active"
])


 currentaudio =k.play(current.sound,{volume:0.5})

 acitivtyscreen();
};

let screenon = false;

k.onKeyPress("enter",()=>{

gifscreen();
k.tween(1,0,1,(opa) =>tutorialtext.opacity=opa);
screenon =true;
k.shake(2);
k.destroyAll("scold")

});

k.onKeyPress("right",()=> {


if (screenon === true){
gifonscreen.destroy("active")
currentaudio.paused=true;

     if (current.iscursed===false){
    k.wait(0.5,()=>{
        const pchime =k.play("pchime")
        pchime.speed =1.5
        pchime.volume = 0.3
        })
    }

    if (current.iscursed ===true){
        sanity++
    }


        arr.scale=k.vec2(0.12)
    k.wait(0.2,()=>{
        arr.scale = k.vec2(0.1)
    })

    
    const loading = bg.add([
        k.sprite('load'),
        k.z(10),
        "load"
    ]);
    k.wait(1.5,()=>{
        currentIndex++
        currentaudio.paused=true;
        loading.destroy("load")
        gifscreen();

    });
}

if (screenon ===false){
    k.shake(10);
    k.add([
        k.text("Press ENTER",{font:"dos"}),
        k.pos(260,100),
        "scold"
    ])
}
});


k.onKeyPress("left",()=> {


if (screenon === true){
 currentaudio.paused=true;
 gifonscreen.destroy("active")

        arl.scale=k.vec2(0.12)
    k.wait(0.2,()=>{
        arl.scale = k.vec2(0.1)
    })

    const loading = bg.add([
        k.sprite('load'),
        k.z(10),
        "load"
    ]);
    k.wait(1.5,()=>{
        currentIndex++
        loading.destroy("load")
        gifscreen();
    });


}

if (screenon ===false){
    k.shake(10);
    k.add([
        k.text("Press ENTER",{font:"dos"}),
        k.pos(260,100),
        "scold"
    ])
}

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


k.go("game")