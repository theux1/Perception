

function pictureChange() {
  document.getElementById("thecurtain").src = "img/Communication/Mobile/curtain-open-854x4399.svg";
}

console.log("Are you ready for some perceptional secrets?")

function startAnimation() {
  /* the idea is to set a class .paused to freeze the animation when the site renders right away,
  then remove the class via JS, the animation will then continue*/
  var element = document.getElementById("anitiger");
  element.classList.remove("paused");
  var element = document.getElementById("anibush");
  element.classList.remove("paused");
  var element = document.getElementById("anicoming");
  element.classList.remove("paused");
  var element = document.getElementById("anibestgone");
  element.classList.remove("paused");
  var element = document.getElementById("anigoing");
  element.classList.remove("paused");
  var element = document.getElementById("anihehe");
  element.classList.remove("paused");
}

/* Will just reset the paused state; not the css animation

function resetAnimation() {

  var element = document.getElementById("anitiger").reset();
  var element = document.getElementById("anibush").reset();
  var element = document.getElementById("anicoming").reset();
  var element = document.getElementById("anibestgone").reset();
var element = document.getElementById("anigoing").reset();
  var element = document.getElementById("anihehe").reset();
}
*/


// Vars
var reloadButton  = document.querySelector( '.reload' );
var reloadSvg     = document.querySelector( 'svg' );
var reloadEnabled = true;
var rotation      = 0;

// Events
reloadButton.addEventListener('click', function() { reloadClick() });
