const mobileIcon = document.querySelector('.header__navigation-wrapper-mobile-icon');
const wrapperList = document.querySelector('.header__navigation-wrapper-list');

const wrapperOpen = () => {
  mobileIcon.addEventListener('click',() => {
    wrapperList.classList.toggle('header__navigation-wrapper-list--active')
  });
};

export {wrapperOpen};
