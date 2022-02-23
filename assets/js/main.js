/*=============== LOADER ===============*/


/*=============== SHOW MENU ===============*/
const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  
  throw Error(
    `Please, check your class names, there is no ${selector} class`
  );
};

const navMenu = getElement('.nav__menu');
const navToggle = getElement('#nav-toggle');
const navClose = getElement('#nav-close');


navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = getElement('.nav__menu');

  navMenu.classList.remove('show-menu');
}

navLinks.forEach(elem => elem.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = getElement('#header');

  if(this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/*=============== MIXITUP FILTER PRODUCTS ===============*/


/* Default filter products */ 


/* Link active products */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
