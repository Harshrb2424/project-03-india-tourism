window.onscroll = function () {
  console.log(window.pageYOffset);
  const scrollPersent = window.pageYOffset;
  animationScrollFG.seek((scrollPersent / 750) * animationScrollFG.duration);
  animationScrollText.seek(
    (scrollPersent / 500) * animationScrollText.duration
  );
  animationScrollStateName.seek(
    (scrollPersent / 200) * animationScrollStateName.duration
  );
  animationScrollTime.seek(
    (scrollPersent / 500) * animationScrollTime.duration
  );
  animationScrollH1.seek((scrollPersent / 700) * animationScrollH1.duration);
  animationScrollExplore.seek(
    ((scrollPersent - 200) / 500) * animationScrollExplore.duration
  );

};

anime({
  targets: ".text",
  delay: 1000,
  duration: 1000,
  easing: "easeOutElastic(1, .8)",
  opacity: [0.1, 0.8],
  translateX: ["5%", "5%"],
  translateY: ["100%", "0%"],
  scale: 1.1,
});
anime({
  targets: ".stateName",
  delay: 1000,
  duration: 1000,
  easing: "easeOutElastic(1, .8)",
  opacity: [0.1, 0.8],
  translateY: ["75vh", "0vh"],
  scale: 1.1,
});
anime({
  targets: ".FG",
  delay: 1500,
  opacity: [0, 1],
  translateY: ["150vh", "100vh"],
  duration: 750,
  easing: "easeInOutQuad",
});

const animationScrollFG = anime({
  targets: ".FG",
  opacity: [1, 0],
  // translateY: ["100vh", "0vh"],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});

const animationScrollTime = anime({
  targets: ".time",
  translateY: ["50vh", "-50vh"],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});

const animationScrollText = anime({
  targets: ".text",
  opacity: [1, 0],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});
const animationScrollStateName = anime({
  targets: ".stateName",
  opacity: [1, 0],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});

const animationScrollH1 = anime({
  targets: ".name",
  translateY: ["50vh", "-50vh"],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});
const animationScrollExplore = anime({
  targets: ".explore",
  translateY: ["50vh", "-50vh"],
  scale: [0.1, 1],
  opacity: [0, 1],
  duration: 1000,
  easing: "easeInOutQuad",
  autoplay: false,
});

