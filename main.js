const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");
const links = document.querySelectorAll(".nav_links li");
const introText = document.querySelector(".intro-text");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  document.body.classList.toggle("hide");
  document.querySelector("html").classList.toggle("hide");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    document.body.classList.remove("hide");
    document.querySelector("html").classList.remove("hide");
  });
});



// CURSOR

(function() {
  var mousePos;
  var moved = false;

  document.onmousemove = handleMouseMove;
  setInterval(getMousePosition, 100);

  function handleMouseMove(event) {
      var dot, eventDoc, doc, body, pageX, pageY;
    
    moved = true;

      event = event || window.event;
      if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      mousePos = {
          x: event.pageX,
          y: event.pageY
      };
  }
  function getMousePosition() {
      var pos = mousePos;

      if (!pos) {
          // We haven't seen any movement yet
      }
      else if(moved === true) {
          // Use pos.x and pos.y 
           console.log("Pos:", pos.x, pos.y);
        moved = false;
        cursor = document.querySelector('#cursor');
        cursor.style.left = (pos.x -5) + 'px' ;
        cursor.style.top = (pos.y -5) + 'px';

      }
  }
})();




// HOVER ME

$("h1").hover(over, out);

function over(){
TweenMax.to("#cursor", 0.2, {width:50, height:50, filter: "blur(9px)", borderColor:"rgba(255,255,0,0.5)", backgroundColor:"rgba(255,255,0,0.3)", ease: Power3.easeOut})
TweenMax.to(".yellow", .2, {opacity:1, y: -5})
}

function out(){
TweenMax.to("#cursor", 0.2, {width:35, height:35, filter: "blur(0px)", borderColor:"rgba(255,255,0,1)", backgroundColor:"rgba(255,255,0,0)", ease: Power3.easeOut})
TweenMax.to(".yellow", .2, {opacity:0, y: 0})
}
