// eslint-disable-next-line no-empty-function
var x = document.getElementById("myAudio");


$(document).ready(function() {
  function playAudio() {
    var x = document.getElementById("myAudio");

  x.play();
  console.log("song");
  }

  $(document).on("click", "button.accepted", toggleAccepted);
  
  
  function toggleAccepted(event) {
    console.log("BUTTON PRESSED");
  }

  playAudio();
  
});
