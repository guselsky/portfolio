class LazyLoad {

	constructor() {
		this.lazyTargets = document.querySelectorAll('.lazy');
		this.lazyTargets.forEach(function(target) {this.lazyLoad(target)}.bind(this));
	}

	lazyLoad(target) {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					const src = img.getAttribute('data-src');

					img.setAttribute('src', src);

					observer.disconnect();
					}
				});
			});
			observer.observe(target);
		}
	}

export default LazyLoad;