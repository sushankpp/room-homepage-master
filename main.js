const rightArr = document.querySelector('.right-arrow');
const leftArr = document.querySelector('.left-arrow');
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navbar = document.querySelector('.nav-bar');
const logo = document.querySelector('.logo');

let images = [
  './images/desktop-image-hero-1.jpg',
  './images/desktop-image-hero-2.jpg',
  './images/desktop-image-hero-3.jpg',
];

let mobileImgs = [
  './images/mobile-image-hero-1.jpg',
  './images/mobile-image-hero-2.jpg',
  './images/mobile-image-hero-3.jpg',
];

let currentImgIndex = 0;

function updateHeaderImage() {
  if (isMobile()) {
    header.style.backgroundImage = `url(${mobileImgs[currentImgIndex]})`;
  } else {
    header.style.backgroundImage = `url(${images[currentImgIndex]})`;
  }
}

rightArr.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % images.length;
  updateHeaderImage();
});

leftArr.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
  updateHeaderImage();
});

function isMobile() {
  return window.innerWidth < 760;
}

hamburger.addEventListener('click', () => {
  navbar.classList.add('click');
  close.classList.add('clicked');
  logo.classList.add('clicked');
});

close.addEventListener('click', () => {
  navbar.classList.remove('click');
  close.classList.remove('clicked');
  logo.classList.remove('clicked');
});

updateHeaderImage();
