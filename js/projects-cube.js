const layers = document.querySelectorAll(".layer");
const oddCubes =  document.querySelectorAll(".float-down");
const cubes = document.querySelectorAll(".cube");
// const shadow = document.querySelector(".shadow");

// THIS IS THE ANGLES OF THE PROJECT CUBE
let angles = [ "0deg", "90deg", "180deg", "270deg"];
let i = 0;

// THIS IS THE FUNTION TO MOVE FORWARD THROUGH THE ARRAY
function nextProject(){
    if(i < angles.length - 1){
        for(let index = 0; index < layers.length; index++){
            layers[index].style.transform = "rotateY(" + angles[i + 1] + ")";
            layers[0].style.transition = "all 0.6s ease-in-out 0.4s";
            layers[1].style.transition = "all 0.6s ease-in-out 0.5s";
            layers[2].style.transition = "all 0.6s ease-in-out 0.6s";
        };
        // shadow.style.transform = "rotateY(" + angles[i + 1] + ") rotateX(-90deg) translateY(13.5rem) translateZ(4rem)";
        i++;
        scatter();
    }
    console.log(angles[i]);
};    

// THIS IS THE FUNCTION TO DECREASE THE VALLUE OF THE ARRAY
function prevProject(){
    if(i > 0){
        for(let index = 0; index < layers.length; index++){
            layers[index].style.transform = "rotateY(" + angles[i - 1] + ")";
            layers[0].style.transition = "all 0.6s ease-in-out 0.4s";
            layers[1].style.transition = "all 0.6s ease-in-out 0.5s";
            layers[2].style.transition = "all 0.6s ease-in-out 0.6s";
        };
        // shadow.style.transform = "rotateY(" + angles[i - 1] + ") rotateX(-90deg) translateY(13.5rem) translateZ(4rem)";
        i--;
        scatter();
    }
};

function scatter(){

    if(angles[i] === "0deg"){
        for(let index = 0; index < layers.length; index++){
            layers[0].classList.remove("layer1-1");
            layers[0].classList.add("layer1-alt");
            layers[2].classList.remove("layer3-1");
            layers[2].classList.add("layer3-alt");
        };

        for(let index = 0; index < oddCubes.length; index++){
            oddCubes[index].classList.remove("float-down-alt");
            oddCubes[index].classList.add("float-down-1");
        }
    }

    if(angles[i] === "90deg"){
        for(let index = 0; index < layers.length; index++){
            layers[0].classList.remove("layer1-alt");
            layers[0].classList.add("layer1-1");
            layers[2].classList.remove("layer3-alt");
            layers[2].classList.add("layer3-1");
        };

        for(let index = 0; index < oddCubes.length; index++){
            oddCubes[index].classList.remove("float-down-1");
            oddCubes[index].classList.add("float-down-alt");
        }  
    }

    if(angles[i] === "180deg"){
        for(let index = 0; index < layers.length; index++){
            layers[0].classList.remove("layer1-1");
            layers[0].classList.add("layer1-alt");
            layers[2].classList.remove("layer3-1");
            layers[2].classList.add("layer3-alt");
        };

        for(let index = 0; index < oddCubes.length; index++){
            oddCubes[index].classList.remove("float-down-alt");
            oddCubes[index].classList.add("float-down-1");
        }
    }

    if(angles[i] === "270deg"){
        for(let index = 0; index < layers.length; index++){
            layers[0].classList.remove("layer1-alt");
            layers[0].classList.add("layer1-1");
            layers[2].classList.remove("layer3-alt");
            layers[2].classList.add("layer3-1");
        };

        for(let index = 0; index < oddCubes.length; index++){
            oddCubes[index].classList.remove("float-down-1");
            oddCubes[index].classList.add("float-down-alt");
        }
    }
}
