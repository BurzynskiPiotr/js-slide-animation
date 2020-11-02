// code for intro

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 2, stagger: 0.5 });
// tl.fromTo(".button", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");

// function activeLandingPage() {
//   tl.to(".intro", { y: "-100%", duration: 1 });
//   tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
// }

const tl = new TimelineMax({ onUpdate: updatePercentage });
const tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.to(".progress-bar", { width: "100%", duration: 1.5 }, "-=1.5");
tl.from(".quote", 1.5, { x: 500, opacity: 0 }, "-=1.5");
tl.from(".quote2", 1, { x: 500, opacity: 0 }, "-=1");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".sticky")
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
