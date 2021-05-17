var something = document.querySelector('.background-animation')

anime({
  targets: something,
  points: [
    { value: [
      '2.5,1079.5 605.1,831.5 1518.3,759.5 1919.5,2 1919.5,1079.5',
      '3.5,1079.5 807.1,846.5 1682.4,713.4 1919.5,3.1 1919.5,1079.5']
    },
  ],
  easing: 'easeOutQuad',
  duration: 20000,
  direction: 'alternate',
  loop: true
});
anime({
      targets: '.anime',
      translateY: ['-10vh','0vh'],
      opacity: [0,1],
      duration: 1000,
      // delay: anime.stagger(100, {start: 500}),
      // direction:'reverse'
})
anime({
      targets: '.anime2',
      opacity: [0,1],
      duration: 3000,
      delay: anime.stagger(100, {start: 500}),
})

var homeDesktop = document.querySelector('.trigger-one')
var imageOne = document.querySelector('.image-one')

homeDesktop.addEventListener('click', function(){
  imageOne.classList.toggle('image-one-anime')
})

var homeTablet = document.querySelector('.trigger-two')
var imageTwo = document.querySelector('.image-two')

homeTablet.addEventListener('click', function(){
  imageTwo.classList.toggle('image-two-anime')
})

var homeMobile = document.querySelector('.trigger-three')
var imageThree = document.querySelector('.image-three')

homeMobile.addEventListener('click', function(){
  imageThree.classList.toggle('image-three-anime')
})

var contactDesktop = document.querySelector('.trigger-four')
var imageFour = document.querySelector('.image-four')

contactDesktop.addEventListener('click', function(){
  imageFour.classList.toggle('image-four-anime')
})

var contactTablet = document.querySelector('.trigger-five')
var imageFive = document.querySelector('.image-five')

contactTablet.addEventListener('click', function(){
  imageFive.classList.toggle('image-five-anime')
})

var contactMobile = document.querySelector('.trigger-six')
var imageSix = document.querySelector('.image-six')

contactMobile.addEventListener('click', function(){
  imageSix.classList.toggle('image-six-anime')
})



var textWrapper = document.querySelector('.animepog .letters');
var textElse = document.querySelector('.hello');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textElse.innerHTML = textElse.textContent.replace(/\S/g, "<span class='dude'>$&</span>");



anime.timeline({loop: false})
.add({
  targets: '.animepog .letter',
  translateY: ["1.1em", 0],
  translateX: ["0.55em", 0],
  translateZ: 0,
  rotateZ: [180, 0],
  duration: 750,
  easing: "easeOutExpo",
  delay: (el, i) => 50 * i
}).add({
    targets: '.animepog .dude',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
})