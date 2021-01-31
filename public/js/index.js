import Swiper from 'swiper/bundle';
import { drag } from './drag';
import { login } from './login';
import { logOut} from './logout';
import { deleteArticle } from './deleteArticle';
import { creaateArticle, createArticle} from './createArticle';

// SWIPER CONTAINER SETTINGS

const swiper = new Swiper ('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
});

// DOM ELEMENTS

const menuToggle = document.querySelector('.burger_menu');
const mobileNav = document.querySelector('.mobile_nav');
const mainNav = document.querySelector('.header');
const body = document.querySelector('body');
const heroHeading = document.querySelector('.hero_heading');
const heroLogo = document.querySelector('.hero_logo');

const contentSection = document.querySelector('.content_section');
const wrapper = document.querySelector('.wrapper');
const testimonialsSection = document.querySelector('.testimonials_section');


const mobileLinks = document.querySelector('#mobilelinks')

const loginForm = document.querySelector('.form');

const logoutBtn = document.querySelector('#logoutbtn');

const item = document.querySelectorAll('.item1');

const closeModal = document.querySelectorAll('.close_modal');

const dragCards = document.querySelector('.cards_section');

const delBtnArticle = document.querySelector('.article-button-del');

const createArticleForm = document.querySelector('#createarticleform');

// DOM ACTIONS

if (delBtnArticle) {
  delBtnArticle.addEventListener('click', e => {
    e.preventDefault
    const heading = document.querySelector('#article-heading').textContent;
    deleteArticle(heading);
  })
}

if (createArticleForm) {
  createArticleForm.addEventListener('submit', e => {
    e.preventDefault();
    const heading = document.querySelector('#heading').value;
    const content = document.querySelector('#content').value;
    const imagecover = document.querySelector('#imagecover').value;
    console.log(heading, content, imagecover)
    createArticle(heading, content, imagecover)
  })
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    mobileNav.classList.toggle('active')
    body.classList.toggle('active')
    heroHeading.classList.toggle('active')
    heroLogo.classList.toggle('active')
});
};

if (mobileLinks) {
  const links = Object.values(mobileLinks.children)
  links.forEach(el => {
    el.addEventListener('click', () => {
      menuToggle.classList.toggle('active')
      mobileNav.classList.toggle('active')
      body.classList.toggle('active')
      heroHeading.classList.toggle('active')
      heroLogo.classList.toggle('active')
    })
  })
}

if (item) {
  item.forEach( el => {
    el.addEventListener('click', () => {
      const modal = el.getAttribute('alt')

        document.getElementById(modal).style.display = 'flex'
      
        window.scrollTo(0, 1000)
        mainNav.classList.toggle('active')
        contentSection.classList.toggle('active')
        wrapper.classList.toggle('active')
        testimonialsSection.classList.toggle('active')
        body.classList.toggle('active')
    })
  });
}

if (closeModal) {
  closeModal.forEach( el => {
    el.addEventListener('click', () => {
      el.parentNode.style.display = 'none'
      mainNav.classList.toggle('active')
      contentSection.classList.toggle('active')
      wrapper.classList.toggle('active')
      testimonialsSection.classList.toggle('active')
      body.classList.toggle('active')
    })
  })
}

if(dragCards) {
 drag(dragCards);
}

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    login(email, password);
  });
};

if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    logOut();
  });
};