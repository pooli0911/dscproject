var doc = document;
var tempx=0;
var direct='none'
function touchEvent(event) {
  event = event || window.event;
  var coordinateX = event.changedTouches[0].clientX;
  var coordinateY = event.changedTouches[0].clientY;
  var intX = parseInt(coordinateX);
  var intY = parseInt(coordinateY);
  switch (event.type) {
    case "touchstart":
        direct='none'
        tempx=intX;
      break;
    case "touchmove":
      event.preventDefault();
      if(tempx-intX>screen.width/40){
        if(direct=='none')direct="left"
      }
      if(intX-tempx>=screen.width/40){
          if(direct=='none')direct="right"
      }
      tempx=intX
      break;
    case "touchend":
        console.log(direct)
      break;
  }
}

document.addEventListener("touchstart", touchEvent, false);
document.addEventListener("touchmove", touchEvent, false);
document.addEventListener("touchend", touchEvent, false);