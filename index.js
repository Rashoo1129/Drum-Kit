var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}


function handleClick() {
  var btn = this.innerHTML;

    makeSound(btn);
    animation(btn);

  }

  document.addEventListener("keypress",function(event) {
    makeSound(event.key);
    animation(event.key);
  });


  function makeSound(key)
  {
    switch (key) {
      case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "a":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "s":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "d":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "j":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "k":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default: console.log(key);
  }

}

function animation(aKey){
  var abtn = document.querySelector("."+aKey);
  abtn.classList.add("pressed");

  setTimeout(function(){
    abtn.classList.remove("pressed");
  },100);
}
