
// open curtain by changing imgs
function pictureChange() {
  document.getElementById("thecurtain").src = "img/Communication/Mobile/curtain-open-854x4399.svg";
  setTimeout(closeCurtain, 3000);
}
// In function pictureChange() set timer (see above) will trigger the function closeCurtain()
function closeCurtain() {
  document.getElementById("thecurtain").src = "img/Communication/Mobile/curtain-closed-854x399.svg";
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

// reset svg var
var reloadButton  = document.querySelector( '.reload' );
var reloadSvg     = document.querySelector( '#reloadbutton' );
var reloadEnabled = true;
var rotation      = 0;

// reset svg Events
reloadButton.addEventListener('click', function() { reloadClick() });

// reset svg Functions
function reloadClick() {

  reloadEnabled = false;
  rotation -= 180;

reloadSvg.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
reloadSvg.style.MozTransform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
reloadSvg.style.transform  = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
}
// Show reset svg
setTimeout(function() {
  reloadButton.classList.add('active');
}, 1);



// click eventt jquery

$("#reloadbutton").click(function() {

//add the formerly removed paused class
  $("#animation").find("img").addClass("paused");

//get img by id, then clone the img, insert, and remove the old img by id
   var el     = $("#anibush"),
       newone = el.clone(true);
   el.before(newone);
   $("." + el.attr("id") + ":last").remove();

   var el     = $("#anitiger"),
       newone = el.clone(true);
   el.before(newone);
   $("." + el.attr("id") + ":last").remove();

   var el     = $("#anicoming"),
       newone = el.clone(true);
   el.before(newone);
   $("." + el.attr("id") + ":last").remove();

   var el     = $("#anibestgone"),
       newone = el.clone(true);
   el.before(newone);
   $("." + el.attr("id") + ":last").remove();

   var el     = $("#anigoing"),
       newone = el.clone(true);
   el.before(newone);
   $("." + el.attr("id") + ":last").remove();

   var el     = $("#anihehe"),
       newone = el.clone(true);
   el.before(newone);
   $("." + el.attr("id") + ":last").remove();

  });
