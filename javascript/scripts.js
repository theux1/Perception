

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

/*
$('#reloadbutton').click(function(){
    $target = $('#anitiger');
    $target.removeClass('tiger');
    setTimeout("$target.addClass('tiger');",100)
});
$('#reloadbutton').click(function(){
    $target = $('#anibush');
    $target.removeClass('bush');
    setTimeout("$target.addClass('tiger');",100)
});
$('#reloadbutton').click(function(){
    $target = $('#anicoming');
    $target.removeClass('coming');
    setTimeout("$target.addClass('coming');",100)
});
$('#reloadbutton').click(function(){
    $target = $('#anigoing');
    $target.removeClass('going');
    setTimeout("$target.addClass('going');",100)
});
$('#reloadbutton').click(function(){
    $target = $('#anibestgone');
    $target.removeClass('bestgone');
    setTimeout("$target.addClass('bestgone');",100)
});
$('#reloadbutton').click(function(){
    $target = $('#anihehe');
    $target.removeClass('hehe');
    setTimeout("$target.addClass('hehe');",100)
});
*/

$("#reloadbutton").click(function() {


  $("#animation").find("img").addClass("paused");


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


  /*
function restartAnimation() {
  var para = document.createElement("img");
  var node = document.getElementById("anibush");
  node.classList.add("paused");
  node.classList.add("bush");
  para.appendChild(node);

  var parent = document.getElementById("animation");
  var child = document.getElementById("anibush");
  parent.replaceChild(para, child);
}

/*function restartAnimation() {
  var element = document.getElementById("animation").remove();
  void element.offsetWidth;
  var element = document.getElementById("animation").add();
}*/

/*



/
function restartAnimation() {
  element.addEventListener(function(e) {
  e.preventDefault;

  var element = document.getElementById("anitiger");
  element.classList.remove("tiger");
  var element = document.getElementById("anibush");
  element.classList.remove("bush");
  var element = document.getElementById("anicoming");
  element.classList.remove("coming");
  var element = document.getElementById("anibestgone");
  element.classList.remove("bestgone");
  var element = document.getElementById("anigoing");
  element.classList.remove("going");
  var element = document.getElementById("anihehe");
  element.classList.remove("hehe");

  void element.offsetWidth;

  // -> and re-adding the class
  element.classList.add("tiger");
  element.classList.add("bush");
  element.classList.add("coming");
  element.classList.add("bestgone");
  element.classList.add("going");
  element.classList.add("hehe");
  element.classList.add("paused");
  }, false);
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
