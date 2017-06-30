import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
			this.lazyImages = $(".lazyload");
			this.itemsToReveal = els;
			this.offsetPercentage = offset;
			this.hideInitially();
			this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},

				offset: that.offsetPercentage
			});
		});
	}

	// Refresh Waypoints whenever an image is loaded
	refreshWaypoints() {
		this.lazyImages.load(function() {
			Waypoint.refreshAll();
		});
	}
}

export default RevealOnScroll;