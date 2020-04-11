class MobileMenu {
	constructor() {
		this.menuIcon = document.getElementsByClassName('menu-icon')[0];
		this.menuContent = document.getElementsByClassName('header-menu')[0];
		this.menuListItems = document.getElementsByClassName('header-menu__list-item');
		this.events();
	}

	events() {
		this.menuIcon.addEventListener('click', this.toggleTheMenu.bind(this));
		for (let i = 0; i < this.menuListItems.length; i++) {
			this.menuListItems[i].addEventListener('click', this.toggleTheMenu.bind(this));
		}
	}

	toggleTheMenu() {
		this.menuContent.classList.toggle('header-menu--visible');
	}
}

export default MobileMenu;