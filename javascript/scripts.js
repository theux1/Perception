// open curtain by changing imgs
function pictureChange() {
  document.getElementById("thecurtain").src = "img/Communication/Mobile/curtain-open-854x4399.svg";
  setTimeout(closeCurtain, 3000);
}
// In function pictureChange() set timer (see above) will trigger the function closeCurtain()
function closeCurtain() {
  document.getElementById("thecurtain").src = "img/Communication/Mobile/curtain-closed-854x399.svg";
}
// adding a hamburger menu
function menuToggle() {
  var x = document.getElementById("myNavtoggle");

  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

// Please ignore it! Just some messing around
console.log("Are you ready for some perceptional secrets?");

// Starting the animation
function startAnimation() {
  /* the idea is to set a class .paused to freeze the animation when the site renders right away,
  then remove the class via JS, the animation will then continue */
  var element1 = document.getElementById("anitiger");
  element1.classList.remove("paused");
  var element2 = document.getElementById("anibush");
  element2.classList.remove("paused");
  var element3 = document.getElementById("anicoming");
  element3.classList.remove("paused");
  var element4 = document.getElementById("anibestgone");
  element4.classList.remove("paused");
  var element5 = document.getElementById("anigoing");
  element5.classList.remove("paused");
  var element6 = document.getElementById("anihehe");
  element6.classList.remove("paused");
  setTimeout($.fn.reset, 11000);
}

// timout event jquery

$.fn.reset = function () {
  // add the formerly removed paused class
  $("#animation").find("img").addClass("paused");
  // get img by id, then clone the img, insert, and remove the old img by id
  var el1 = $("#anibush"),
    newone1 = el1.clone(true);
  el1.before(newone1);
  $("." + el1.attr("id") + ":last").remove();

  var el2 = $("#anitiger"),
    newone2 = el2.clone(true);
  el2.before(newone2);
  $("." + el2.attr("id") + ":last").remove();

  var el3 = $("#anicoming"),
    newone3 = el3.clone(true);
  el3.before(newone3);
  $("." + el3.attr("id") + ":last").remove();

  var el4 = $("#anibestgone"),
    newone4 = el4.clone(true);
  el4.before(newone4);
  $("." + el4.attr("id") + ":last").remove();

  var el5 = $("#anigoing"),
    newone5 = el5.clone(true);
  el5.before(newone5);
  $("." + el5.attr("id") + ":last").remove();

  var el6 = $("#anihehe"),
    newone6 = el6.clone(true);
  el6.before(newone6);
  $("." + el6.attr("id") + ":last").remove();
};
