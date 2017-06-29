import $ from 'jquery';

class MobileMenu {
	// Select From The DOM
	constructor() {
		this.menuIcon = $('.menu-icon');
		this.menuContent = $('.main-navigation');
		this.menuListItem = $('.main-navigation li');
		this.events();
	}
	// Handle Click Events
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		this.menuListItem.click(this.toggleTheMenu.bind(this));
	}
	// Set Behaviour
	toggleTheMenu() {
		this.menuContent.toggleClass('main-navigation--visible');
	}
}

export default MobileMenu;