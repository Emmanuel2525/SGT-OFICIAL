const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slides = document.querySelectorAll(".slideshot-li")
const slider = document.querySelector(".slideshot")
let indice = 0;

right.addEventListener("click",goRight)
left.addEventListener("click",goLeft)
slider.addEventListener("mouseover",stop)
slider.addEventListener("mouseout",reset)

function goRight(){
    slides[indice].style.display ="none"
    indice++
    if (indice>slides.length-1){
        indice = 0;
    }
    slides[indice].style.animation ="come 1.5s forwards"
    slides[indice].style.display ="block"
}

function goLeft(){
    slides[indice].style.display = "none"

    indice--;
    if (indice < 0){
        indice = slides.length-1
    }
    
    slides[indice].style.animation = "gone 1.5s forwards"
    slides[indice].style.display = "block"
}


var intervalo = setInterval(goRight,4000)

function stop(){
    clearInterval(intervalo)
}

function reset(){
    intervalo = setInterval(goRight,4000)
}