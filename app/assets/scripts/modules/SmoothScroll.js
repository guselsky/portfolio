import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScroll {
	constructor() {		
		this.headerLinks = $('.header-navigation a');
		this.logoLink = $('.logo-link');
		this.button = $('.btn');
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll({
			offset: -75
		});
		this.logoLink.smoothScroll();
		this.button.smoothScroll();
	}	
}

export default SmoothScroll;