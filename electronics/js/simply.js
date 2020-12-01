// let canvas=document.getElementById("mycanvas");
// let ctx=canvas.getContext("2d");
// let grd=ctx.createLinearGradient(10,10,300,100);
// grd.addColorStop(0,'red');
// grd.addColorStop(1,'yellow');
// ctx.font = "36pt tahoma";
// ctx.fillStyle = grd1;
// ctx.fillText("A place to find what you need", 20, 40)
var images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim 2s  forwards ease-out`;
         
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
    i=0; 
})
images.forEach(image => {
    observer.observe(image);
})


var rightindex = 1;
var leftindex = 1;
document.getElementsByClassName("btn1")[0].onclick = function () {
    slideToRight();
}
document.getElementsByClassName("btn2")[0].onclick = function () {
    slideToLeft();
}
function slideToRight() {
    var back = document.getElementById("hero-image");
   
    if (rightindex == 1) {
        back.style.backgroundImage = "url('images/electronics/content-pixie-62YQFwl7xSQ-unsplash.jpg')"
        rightindex++;
    }
    else if (rightindex == 2) {
        back.style.backgroundImage = "url('images/electronics/nicolas-j-leclercq-qDLLP0yP7FU-unsplash.jpg')"
        rightindex++;
    }
    else if (rightindex == 3) {
        rightindex = 0;
        back.style.backgroundImage = "url('images/electronics/rudra-chakraborty-1C6rGdD0nEQ-unsplash.jpg')"
    }
    else if (rightindex == 0) {
        back.style.backgroundImage = "url('images/electronics/moritz-kindler-QJykaAsWhco-unsplash.jpg')"
        rightindex++;
    }
}
function slideToLeft(){
    var back = document.getElementById("hero-image");
    if (leftindex == 1) {
        leftindex++;
        back.style.backgroundImage = "url('images/electronics/rudra-chakraborty-1C6rGdD0nEQ-unsplash.jpg')"
    }
    else if (leftindex == 2) {
        back.style.backgroundImage = "url('images/electronics/nicolas-j-leclercq-qDLLP0yP7FU-unsplash.jpg')"
        leftindex++;
    }
    else if (leftindex == 3) {
        back.style.backgroundImage = "url('images/electronics/content-pixie-62YQFwl7xSQ-unsplash.jpg')"
        leftindex++;
    }
    else if (leftindex == 4) {
        back.style.backgroundImage = "url('images/electronics/moritz-kindler-QJykaAsWhco-unsplash.jpg')"
        leftindex=1;
    }
}