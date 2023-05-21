
////// dark mode and light btn

const moon = document.getElementById('moon');
const sun = document.getElementById('sun');

moon.addEventListener('click', function() {
    moon.style.display = 'none';
    sun.style.display = 'flex';
});

sun.addEventListener('click', function() {
    sun.style.display = 'none';
    moon.style.display = 'flex';
});




////// modal window


let openBtn = document.getElementById('open');
let closeBtn = document.getElementById('close');
let modal = document.getElementById('modal');



openBtn.addEventListener('click', () => {
    modal.style.display = "flex"
})

closeBtn.addEventListener('click', () => {
    modal.style.display = "none"
})



/////// accordion for humber menu

const accordionItems = document.querySelectorAll('.modal-accordion__item');


accordionItems.forEach(item => {
  const header = item.querySelector('.modal-accordion__item-header');
  const content = item.querySelector('.modal-accordion__item-content');
  const arrow = item.querySelector('.mod-arr')
  
  header.addEventListener('click', () => {
    if (content.style.height) {
      content.style.height = null; 
      arrow.classList.toggle('rotate');
    } else {
      content.style.height = content.scrollHeight + 'px';
      arrow.classList.toggle('rotate');
    }
  });
});


////// dark mode and light body


function darkmode(){
  const body = document.body
  body.classList.toggle('dark-light')

  //// header
  const lists = document.querySelectorAll('#dark-mode');
  
  lists.forEach(list => {
    list.classList.toggle('dark-light')
  })
  
  //// intro
  const intro = document.getElementById('intro');
  intro.classList.toggle('dark-light')
  
  //// courses
  const courses = document.getElementById('courses');
  courses.classList.toggle('dark-light')

}

document.querySelector('.btn-mode').addEventListener('click', darkmode) /// btn dark mode




/////// accordion for footer

const accordionFooter = document.querySelectorAll('.footer-accordion__item');


accordionFooter.forEach(item => {
  const header = item.querySelector('.footer-accordion__item--header');
  const content = item.querySelector('.footer-accordion__item--content');
  const arrow = item.querySelector('.footer-arr')
  
  header.addEventListener('click', () => {
    if (content.style.height) {
      content.style.height = null; 
      arrow.classList.toggle('rotate');
    } else {
      content.style.height = content.scrollHeight + 'px';
      arrow.classList.toggle('rotate');
    }
  });
});


//// slider for video   dark mode id
$('.reviews__video').slick({
  prevArrow: '<div class="slick-arrow slick-prev" id="dark-mode"><i class="bx bx-chevron-left" id="dark-mode"></i></div>',
  nextArrow: '<div class="slick-arrow slick-next" id="dark-mode"><i class="bx bx-chevron-right" id="dark-mode"></i></div>',
  dots: false,
  arrows: true,
  infinite: false,  // бесконечный цикл
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 800,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


//// slider for workplace   dark mode id
$('.workplaces__brand').slick({
  prevArrow: '<div class="slick-arrow slick-prev" id="dark-mode"><i class="bx bx-chevron-left" id="dark-mode"></i></div>',
  nextArrow: '<div class="slick-arrow slick-next" id="dark-mode"><i class="bx bx-chevron-right" id="dark-mode"></i></div>',
  dots: false,
  arrows: true,
  infinite: false,  // бесконечный цикл
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 800,
  rows: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2
      }
    }
  ]
});



