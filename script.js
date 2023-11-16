
tl = gsap.timeline();

tl.from(".navbar",{
    delay:1,
    opacity:0,
    y:20
})

.from(".content h1",{
    y:30,
    scale:1.5,
    opacity:0,
})
.from(".content h4",{
    opacity:0,
    stagger:0.3,
    y:15
})
.from(".content button",{
    opacity:0,
    y:-20,
    duration:1.2
})
