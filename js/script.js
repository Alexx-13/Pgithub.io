const mySwiper = new Swiper ('.swiper-container', {    
    loop: true,  
    loopedSlides: 6,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
 
 const spoilerWrap = document.querySelector('.spoiler-wrap');

spoilerWrap.addEventListener('click', function() {
  spoilerWrap.classList.toggle('active');
});

const swiperBtn = document.querySelector('.swiper-button');
const swiperBtnDescr = document.querySelector('.swiper-top_panel p');
const swiperDescr = document.querySelectorAll('.card-description');

swiperBtn.addEventListener('click', function(e) {  
  swiperDescr.forEach(el => el.classList.toggle('visible'));
  if(swiperBtnDescr.innerHTML === "Show description"){
      swiperBtnDescr.innerHTML = "Hide description";
    } else {
      swiperBtnDescr.innerHTML = "Show description";
    }
});
