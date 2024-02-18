

// //Hero-btn

document.getElementById('hero__btn').addEventListener('click', function() {
  let application = document.getElementById('application');
  window.scrollTo({
     top: application.offsetTop,
     behavior: 'smooth'
  });
});

//Animation

document.addEventListener('DOMContentLoaded', () =>{
  const scrollItems = document.querySelectorAll('.scroll__item');
  const scrollAnimation = () => {
    let windowStart = (window.innerHeight) + window.scrollY;
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
      if(windowStart >= scrollOffset){
        el.classList.add('scroll__animation');
      } else{
        el.classList.remove('scroll__animation');
      }
    })
  }
      scrollAnimation();
     window.addEventListener('scroll', () => {
      scrollAnimation();
     })
})

// //Slider

const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  },

  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 3,
      }
     
  },
});

// Feedback read more

document.getElementById('moreBtn').addEventListener('click', function() {
  let feedbackMore = document.querySelector('.feedback__more');
  if (feedbackMore.style.display === 'none') {
    feedbackMore.style.display = 'block';
    document.getElementById('moreBtn').textContent = 'Скрыть';
  } else {
    feedbackMore.style.display = 'none';
    document.getElementById('moreBtn').textContent = 'Читать отзыв полностью';
  }
});

