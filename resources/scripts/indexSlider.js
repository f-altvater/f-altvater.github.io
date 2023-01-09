const dots = document.querySelectorAll(".dot-container button");
const infos = document.querySelectorAll(".critical-dogs-slides-container .dog-slider");

let i = 0; //current slide
let j = 3; //total slides

function next() {

    document.getElementById("indexDog" + (i + 1)).classList.remove("active");

    i = (j + i + 1) % j;
    document.getElementById("indexDog" + (i + 1)).classList.add("active");
    indicator(i + 1);

}

function prev() {

    document.getElementById("indexDog" + (i + 1)).classList.remove("active");

    i = (j + i - 1) % j;
    document.getElementById("indexDog" + (i + 1)).classList.add("active");
    indicator(i + 1);

}

function indicator(num) {

    dots.forEach(function(dot) {
        dot.style.backgroundColor = "transparent";
    });

    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "rgb(255, 153, 102)";

}

function dot(index) {

    infos.forEach(function(info) {
        info.classList.remove("active");
    });

    document.getElementById("indexDog" + index).classList.add("active");

    i = index - 1;
    indicator(index);

}