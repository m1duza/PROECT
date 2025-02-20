const menuButton = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__menu');

const openMenu = () =>{
	if (menu.classList.contains('header__menu-active')){
		menu.classList.remove('header__menu-active');
	}
	else{
		menu.classList.add('header__menu-active');
	}
}

menuButton.addEventListener('click', openMenu);