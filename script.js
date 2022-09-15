const tabsHandlerElems = document.querySelectorAll('.tabs_elem');
const tabsPoints = document.querySelectorAll('.point');
const sliderItems = document.querySelectorAll((`[data-tabs-handler]`));
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');

function slide() {
  sliderItems.forEach(item => {
    if (item.dataset.tabsHandler === this.dataset.tabsHandler) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
};

for (const tab of tabsHandlerElems) {
  tab.addEventListener('click', slide)
};
for (const point of tabsPoints) {
  point.addEventListener('click', slide)
};

leftArrow.addEventListener('click', () => {
  let activeSliders = document.querySelectorAll('.active[data-tabs-handler]');
  let slideIndex = document.querySelector('.active').dataset.tabsHandler;
  let activeSlides = document.querySelectorAll((`[data-tabs-handler='${(slideIndex - 1)}']`));
  let last = document.querySelectorAll((`[data-tabs-handler='${tabsHandlerElems.length}']`));

  if (+slideIndex === 1) {
    activeSliders.forEach(item => item.classList.remove('active'))
    last.forEach(item => item.classList.add('active'))
  } else {
    activeSliders.forEach(item => item.classList.remove('active'))
    activeSlides.forEach(item => item.classList.add('active'))
  }
})

rightArrow.addEventListener('click', () => {
  let activeSliders = document.querySelectorAll('.active[data-tabs-handler]');
  let slideIndex = document.querySelector('.active').dataset.tabsHandler;
  let activeSlides = document.querySelectorAll((`[data-tabs-handler='${(+slideIndex + 1)}']`));
  let last = document.querySelectorAll((`[data-tabs-handler='1']`));

  if (+slideIndex === 3) {
    activeSliders.forEach(item => item.classList.remove('active'))
    last.forEach(item => item.classList.add('active'))
  } else {
    activeSliders.forEach(item => item.classList.remove('active'))
    activeSlides.forEach(item => item.classList.add('active'))
  }
});