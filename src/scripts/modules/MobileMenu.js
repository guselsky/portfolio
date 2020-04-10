class MobileMenu {
	constructor() {
		this.menuIcon = document.querySelector('.menu-icon');
		this.menuContent = document.querySelector('.header-menu');
		this.menuListItem = document.querySelector('.header-menu li');
		this.events();
	}

	events() {
		this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
		this.menuListItem.addEventListener('click', this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.classList.toggle('header-menu--visible');
	}
}

export default MobileMenu;