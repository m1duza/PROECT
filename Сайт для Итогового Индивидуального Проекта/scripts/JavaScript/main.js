const headerInner = document.querySelector('.header__inner');
const headerMain = document.querySelector('.header__main');

headerMain.style.marginTop = window.getComputedStyle(headerInner).height;