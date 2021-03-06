const layers = document.querySelectorAll(".layer");
const oddCubes =  document.querySelectorAll(".float-down");
const cubes = document.querySelectorAll(".cube");
// const shadow = document.querySelector(".shadow");

// THIS IS THE ANGLES OF THE PROJECT CUBE
let angles = [ "0deg", "450deg", "900deg", "1350deg"];
let i = 0;

// THIS IS THE FUNTION TO MOVE FORWARD THROUGH THE ARRAY
function nextProject(){
    if(i < angles.length - 1){
        for(let index = 0; index < layers.length; index++){
            layers[index].style.transform = "rotateY(" + angles[i + 1] + ")";
            layers[0].style.transition = "all 0.6s ease-in-out 0.4s";
            layers[1].style.transition = "all 0.6s ease-in-out 0.45s";
            layers[2].style.transition = "all 0.6s ease-in-out 0.5s";
        };
        i++;
        scatter();
        transformSoundFx();
    }
    console.log(angles[i]);
};    

// THIS IS THE FUNCTION TO DECREASE THE VALLUE OF THE ARRAY
function prevProject(){
    if(i > 0){
        for(let index = 0; index < layers.length; index++){
            layers[index].style.transform = "rotateY(" + angles[i - 1] + ")";
            layers[0].style.transition = "all 0.6s ease-in-out 0.4s";
            layers[1].style.transition = "all 0.6s ease-in-out 0.45s";
            layers[2].style.transition = "all 0.6s ease-in-out 0.5s";
        };
        i--;
        scatter();
        transformSoundFx();
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

    if(angles[i] === "450deg"){
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

    if(angles[i] === "900deg"){
        for(let index = 0; index < layers.length; index++){
            layers[0].classList.remove("layer1-1");
            layers[0].classList.add("layer1-alt");
            layers[2].classList.remove("layer3-1");
            layers[2].classList.add("layer3-alt");
        };

        for(let index = 0; index < oddCubes.length; index++){
            oddCubes[index].classList.remove("float-down-alt");
            oddCubes[index].classList.add("float-down-1");
        };
    };

    if(angles[i] === "1350deg"){
        for(let index = 0; index < layers.length; index++){
            layers[0].classList.remove("layer1-alt");
            layers[0].classList.add("layer1-1");
            layers[2].classList.remove("layer3-alt");
            layers[2].classList.add("layer3-1");
        };

        for(let index = 0; index < oddCubes.length; index++){
            oddCubes[index].classList.remove("float-down-1");
            oddCubes[index].classList.add("float-down-alt");
        };
    };
};

function transformSoundFx(){
    let transformSound = new Audio();
        transformSound.src = "audio/song2.mp3";

        if(angles[i] === "0deg" || angles[i] === "450deg" || angles[i] === "900deg" || angles[i] === "1350deg"){
            transformSound.play();
        }
}

