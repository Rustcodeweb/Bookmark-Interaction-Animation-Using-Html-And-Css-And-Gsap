var btn = document.querySelector("button");
var t = new TimelineMax({paused: true});

t.to(".icon-container.second-icon", 0.8, {
  transform: "rotateX(0deg)",
  ease: Bounce.easeOut
});

function bookmark(){
  t.reversed(!t.reversed());
  if (t.reversed()) {
    t.revers();
  }
  else{
    t.play();
  }
}
