const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()
tl.to(".page1", {
    y: "100vh",
    duration: 0,
    scale: 0.4
})
tl.to(".page1", {
    y: "-70vh",
    delay: 0.8,
    duration: 1.5
})
tl.to(".page1", {
    y: "0vh",
    rotate: 360,
    duration: 1.35,
    scale: 1
})


var firstcard = document.querySelector(".mid9-crd")
var secondcard = document.querySelector(".mid9-crd1")
var thirdcard = document.querySelector(".mid9-crd2")
var fourthcard = document.querySelector(".mid9-crd3")

firstcard.addEventListener("mousemove", function () {
    secondcard.style.transform = "translateX(-10%)"
    thirdcard.style.transform = "translateX(-80%)"
    fourthcard.style.transform = "translateX(-150%)"
})
firstcard.addEventListener("mouseout", function () {
    secondcard.style.transform = "translateX(-50%)"
    thirdcard.style.transform = "translateX(-110%)"
    fourthcard.style.transform = "translateX(-170%)"
})


secondcard.addEventListener("mousemove", function () {
    thirdcard.style.transform = "translateX(-65%)"
    fourthcard.style.transform = "translateX(-130%)"
})
secondcard.addEventListener("mouseout", function () {
    thirdcard.style.transform = "translateX(-110%)"
    fourthcard.style.transform = "translateX(-170%)"
})


thirdcard.addEventListener("mousemove", function () {
    fourthcard.style.transform = "translateX(-122%)"
})
thirdcard.addEventListener("mouseout", function () {
    fourthcard.style.transform = "translateX(-170%)"
})



//Burger

var aa = document.querySelector("nav>.cut>.onecut")
var bb = document.querySelector("nav>.cut>.twocut")
var selc = document.querySelector("nav>.cut")
var show = document.querySelector("#burger")
var cc = document.querySelector("#burger .cut")
var dd = document.querySelector("#burger .onecut")
var ee = document.querySelector("#burger .twocut")
var check = 1
var change = 1

//Converting to Close
selc.addEventListener("click", function () {
    if (check == 1) {
        aa.style.transform = "translateX(-0.2px) translateY(2px) rotate(141deg)"
        bb.style.transform = "translateX(-4.8px) translateY(-4px) rotate(38deg)"
        check = 0
    }
    else {
        aa.style.transform = "translateX(1.8px) rotate(90deg)"
        bb.style.transform = "translateX(0px) translateY(0px) rotate(90deg)"
        check = 1
    }
})

//Close Converting Into Line




//None To Block
var tl = gsap.timeline()
selc.addEventListener("click", function () {
    dd.style.transform = "translateX(-0.2px) translateY(0px) rotate(144deg)"
    ee.style.transform = "translateX(-4.8px) translateY(0px) rotate(37deg)"

    if (change == 1) {
        tl.to("#burger", {
            height: "100vh",
            display: "block",
            duration: 0.4,
            zIndex: 999,
            stagger: 0,
            opacity: 1
        })
        tl.to(".up>img", {
            opacity: 1,
        })
        tl.to(".cent>h1", {
            opacity: 1,
            stagger: 0.25
        })
        tl.to(".low>h5", {
            opacity: 1
        })
        change = 0
    }
})

//Block To None
cc.addEventListener("click", function () {
    aa.style.transform = "translateX(1.8px) translateY(0px) rotate(90deg)"
    bb.style.transform = "translateX(0px) translateY(0px) rotate(90deg)"
    dd.style.transform = "translateX(1.8px) translateY(0px) rotate(90deg)"
    ee.style.transform = "translateX(0px) translateY(6px) rotate(90deg)"

    tl.to(".low>h5", {
        opacity: 0,
        zIndex: 0,
    })
    tl.to(".cent>h1", {
        opacity: 0,
        zIndex: 0,
        duration: 0,
        stagger: -0.19
    })
    tl.to("#burger", {
        height: "0",
        zIndex: 0,
        opacity: 1,
        duration: 0.2
    })
    tl.to(".up>img", {
        opacity: 0,
        zIndex: 0,
    })
    change = 1
})
