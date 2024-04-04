var active = 3;
var miniCircles = document.querySelectorAll(".mini-circle");
var contents = document.querySelectorAll(".second");
// console.log(contents);

gsap.to(contents[active-1],{
    opacity: 1,
})
gsap.to(miniCircles[active-1],{
    opacity: 1,
    delay: 1,
})

miniCircles.forEach(function(e,index){
    e.addEventListener("click",function(){
        // console.log(index);
        // console.log(contents[index]);
        gsap.to(".circle",{
            rotate: (3-(index+1))*10,
            duration: 1,
            ease: "expo.out",
        })
        fadeout();
        gsap.to(this,{
            opacity: 1,
        })
        gsap.to(contents[index],{
            opacity: 1,
        })
    })
})

gsap.to(".circle",{
    rotate: 0,
    duration: 2,
    ease: "expo.inOut",
})

function fadeout(){
    gsap.to(miniCircles,{
        opacity: 0.1,
    })

    gsap.to(contents,{
        opacity: 0.2,
    })
}