var intro = document.querySelector('.intro')
var screenWidth = window.innerWidth
var screenHeight = window.innerHeight
var letters = document.querySelector('.introLetters')
letters.innerHTML = letters.textContent.replace(/\S/g,"<span class='anime1'>$&</span>")
var test = document.querySelector('.anime1')
anime.timeline({loop:false})
.add({
  targets: '.anime1',
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 1500,
  easing: "easeOutExpo",
  delay: (el, i) => 50 * i
})
.add({
  targets: '.anime1',
  translateY: [0, "1.1em"],
  translateX: [0, "0.55em"],
  translateZ: 0,
  rotateZ: [0, -180],
  duration: 1500,
  delay: 2500,
  easing: "easeOutExpo",
  delay: (el, i) => 50 * i
})
.add({
  targets: intro,
  translateX: [0,screenWidth],
  duration: 550,
  easing: 'easeInCubic',
})

var circle = document.querySelector('.circle')
let animeScreen = screenWidth *  -1//-0.52
let animeScreen2 = screenHeight * 0.5
anime.timeline({loop:false})
.add({
  targets: circle,
  translateX: [
    {value: [0, animeScreen], delay: 2800,},
    {value: [animeScreen, 0], delay: 1400,},
  ],
  scaleX: [
    {value: 2, duration: 500, delay: 2800},
    {value: 1, duration: 100, delay: 500},
  ],
  duration: 2000,
  easing: 'easeInCubic',
})


anime({
  targets: '.loadIn',
  translateY: [10,0],
  opacity: [0,1],
  delay: anime.stagger(100, {start: 5000})
})














// .add({
//   targets: circle,
//   translateX: [
//     {value: [0, animeScreen]},
//   ],
//   translateY: [0,animeScreen2],
//   rotateZ: [
//     { value: [0,50], delay: 0 }, 
//   ],
//   scaleX: [
//     {value: 1.2, duration: 600},
//     {value: 1, duration: 1000, delay: 500},
//   ],
//   scaleY: [
//     {value: 1.5, duration: 600},
//     {value: 1, duration: 175, delay: 500},
//   ],
//   duration: 2500,
//   delay: 3000,
//   easing: "easeOutExpo",
// })