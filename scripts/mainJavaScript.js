const bigDecor = document.querySelector("#bigDecorFront");
const price = document.querySelector("#priceText");
const flameImg = document.querySelector("#activeFlame");
const flameAudio = document.querySelector("#flameAudio");

var priceNumber = 0;
var flameFrame = 1;

function showBigDecor(){

    bigDecor.style.transform = "translateX(-50%) scale(1)";
    bigDecor.style.transition = "0.8s ease-out";

    setTimeout(showFlame, 1000);

}

var priceInterval = setInterval(increasePrice, 1);

function increasePrice(){
    price.innerHTML = priceNumber.toFixed(2);
    
    if(priceNumber < 1142){
        
        priceNumber+= 1;
        
    }
    
    if(priceNumber < 1142.33){
    
        priceNumber+= 0.01;
    
    }else{

        setTimeout(showBigDecor, 1000);
        clearInterval(priceInterval);

    }
}

function showFlame(){
    
    flameImg.style.display = "inline-block";
    setInterval(flame, 50);

    var playPromise = document.querySelector('#flameAudio').play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            playPromise;
        }).catch(function(error) {
        });
      }

}

function flame(){
    
    flameImg.src = "images/fireImages/fire_"+ flameFrame +".png";

    if(flameFrame > 29){
        flameFrame = 1;
    }

    flameFrame++;

    if(flameAudio.currentTime > 2.6){
        flameAudio.currentTime = 0.1
    }
}