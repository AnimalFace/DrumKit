

let numberOfDrumButtons = document.querySelectorAll(".drum").length;
//detecting clicks
for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener('click', function () {
    //sets the inner html of what was clicked as a variable to be output
    let buttonInnerHTML = this.innerHTML;
  
    //call makeSound with the output of this click event listener as the parameter
    makeSound(buttonInnerHTML);
  
    buttonAnimation(buttonInnerHTML);
  });
}


// detecting keys                            VV sets event as the variable of the key pressed so you can output it 
document.addEventListener('keydown', function(event) {
  //calls makeSound with the key pressed as input
  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){
  switch (key) {
    case "w":
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
    case "a":
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;
    case "s":
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;
    case "d":
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;
    case "j":
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;
    case "k":
        let kick = new Audio('sounds/kick-bass.mp3');
        kick.play();s
      break;
    case "l":
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;
    default:
      break;
  }
};

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}
//coordinates detector
// document.addEventListener('click', function(event){
//   console.log("x " + event.screenX + " y " + event.screenY);
//   let xAxis = event.screenX;
//   let yAxis = event.screenY;
//   whichRegion(xAxis,yAxis);
// });

// function whichRegion(xAxis,yAxis) {
//   if (xAxis > 750 && yAxis < 500) {
//     alert('you have clicked the top right corner of the screen!')
//   } else if ( xAxis < 750 && yAxis < 500) {
//     alert('you have clicked the top left corner of the screen!')
//   } else if ( xAxis < 750 && yAxis > 500) {
//     alert('you have clicked the bottom left corner of the screen!')
//   } else if ( xAxis > 750 && yAxis > 500) {
//     alert('you have clicked the bottom right corner of the screen!')
//   }
// };