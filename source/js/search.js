const button = document.querySelector('.search button');
const searchBlock = document.querySelector('.search');

const searchActive = () => {
  if (window.innerWidth <= 1023) return;

  if (!button || !searchBlock) return;

  button.addEventListener('click',() => {
    searchBlock.classList.toggle('search--active');
  });

  document.addEventListener('click',(event) => {
    if (!searchBlock.classList.contains('search--active')) return;

    if (searchBlock.contains(event.target)) return;

    searchBlock.classList.remove('search--active');
  });

  return () => {
    button.removeEventListener('click', handleButtonClick);
    document.removeEventListener('click', handleDocumentClick);
  };
};

export {searchActive};
