let swiper;
function initSwiper() {
  swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      allowTouchMove: true,

      pagination: {
        el: '.swiper-pagination',
      },
      type: "bullets",
      clickable: true,
  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null; 
  }
}

function checkWidth() {
  if (window.innerWidth < 768) {
    if (!swiper) { 
      initSwiper();
    }
  } else {
    destroySwiper();
  }
}

  window.addEventListener('resize', checkWidth);
  

  checkWidth();

const showmore=document.querySelector('.show-more__button');
function showmore_func(){
  let expand_swiper =  document.querySelector('.swiper-wrapper');
  let showmore_text=document.querySelector('.show-more__button-title');
  let showmore_image=document.querySelector('.show-more__button-img');
if(expand_swiper.classList.contains('expanded')){
  expand_swiper.classList.remove('expanded');
  showmore_text.innerHTML='Показать всё';
  showmore_image.classList.remove('rotate');
}else{
 expand_swiper.classList.add('expanded');
 showmore_text.innerHTML='Скрыть';
 showmore_image.classList.add('rotate');

}

}
showmore.onclick=showmore_func;

