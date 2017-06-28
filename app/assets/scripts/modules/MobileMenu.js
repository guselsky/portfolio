import $ from 'jquery';

class MobileMenu {
	// Select From The Dom
	constructor() {
		this.menuIcon = $('.menu-icon');
		this.menuContent = $('.main-navigation');
		this.events();
	}
	// Handle Click Events
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	// Set Behaviour
	toggleTheMenu() {
		this.menuContent.toggleClass('main-navigation--visible');
	}
}

export default MobileMenu;