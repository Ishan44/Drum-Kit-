
//Detecting button press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {


    // this.style.color="white";

    var buttonInnerHTML = this.innerHTML;
    var audio;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
  );

}

//Detecting key press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(k) {
  switch (k) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    
    case "i":
        audio = new Audio("sounds/clap.mp3");
        audio.play();
        break;
    default:
      console.log(k);

  }
}

function buttonAnimation(currentKey){
  var actBtn=document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function() {
  var actBtn=document.querySelector("."+currentKey).classList.remove ("pressed");
}, 60);

}
