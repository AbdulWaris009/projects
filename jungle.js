gsap.from("nav,#bird1,#bird2,#text ,#water",{
    y:-200,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.4
})
gsap.from("#rocks",{
    x:-200,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.4
})
gsap.from(".btn",{
    x:400,
    opacity:0,
    duration:2,
    delay:1,
})

gsap.from("#forest",{
    opacity:0,
    duration:4,
    delay:3,
})
gsap.from(".sec ,#para",{
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".sec ,#para",
        scroller:"body",
        stagger:1,
    }
})

