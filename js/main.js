var doc = document;
var tempx=0;
var direct='none'
var lscroll = 0;
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
      if(tempx-intX>25){
        if(direct=='none')direct="right"
      }
      if(intX-tempx>=25){
        if(direct=='none'){
          direct="left"
        }
      }
      tempx=intX
      break;
    case "touchend":
        switch(direct){
            case 'left':
                document.getElementById("a").classList.add("active");
                document.getElementById("b").classList.remove("active");
                break;
            case'right':
                document.getElementById("b").classList.add("active");
                document.getElementById("a").classList.remove("active");
                break;
        }
        console.log(direct)
      break;
  }
}

document.addEventListener("touchstart", touchEvent, { passive: false });
document.addEventListener("touchmove", touchEvent, { passive: false });
document.addEventListener("touchend", touchEvent, { passive: false });
function wheelEvent(event){
    if((lscroll<=200&&event.wheelDelta>=0)||((lscroll>=-200)&&(event.wheelDelta<=0))){
        lscroll+=event.wheelDelta;
    }
    console.log(lscroll)
    if(lscroll>=60){
        document.getElementById("a").classList.add("active");
        document.getElementById("b").classList.remove("active");
    }
    if(lscroll<=-60){
        document.getElementById("b").classList.add("active");
        document.getElementById("a").classList.remove("active");
    }
}
document.addEventListener("wheel",wheelEvent);