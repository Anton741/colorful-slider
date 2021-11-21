var slideCount = document.querySelectorAll(".main-slide div").length
const downBtn = document.querySelector(".down-button")
const upBtn = document.querySelector(".up-button")
const slideMain = document.querySelector(".main-slide")
const sidebar = document.querySelector('.sidebar')
var container = document.querySelector('.container')
var activeSlide = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

downBtn.addEventListener('click', () => changeSlide("down"));
upBtn.addEventListener("click", () => changeSlide("up"))

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlide++
    if (activeSlide === slideCount ) {
      activeSlide = 0;
    };
  }
  else{
    activeSlide--;
    if (activeSlide < 0) {
      console.log(slideCount);
      activeSlide = slideCount - 1 
    }
  };
  var height = container.clientHeight;
  console.log(`${674*activeSlide}`);
  slideMain.style.transform = `translateY(-${height*activeSlide}px)`
  sidebar.style.transform = `translateY(${height*activeSlide}px)`
}


