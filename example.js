// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new Error(`Something went wrong, make sure the ${selector} exists or is typed correctly.`);
}

//Nav styles on scroll
window.addEventListener('scroll', function(){
  let header = document.querySelector('nav');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})

//auto slideshow

/*var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000); // Change image every 2 seconds
}*/


//Array of images which you want to show: Use path you want.
/*var images = new Array('/images/pexels-bri-schneiter-346529.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){
      nextimage=0;
    }
    $('.picture')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn('slow',function(){
        setTimeout(doSlideshow,10000);
    });
}*/
