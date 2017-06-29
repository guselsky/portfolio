import $ from 'jquery';

class CopyEmail {
	constructor() {
		this.copyEmail = $('.copy-email');
		this.copyEmailNotification = $('.copy-email-notification');
		this.events();
	}

	events() {
		this.copyEmail.click(this.copyToClipboard.bind(this));
	}

	copyToClipboard() {
		this.copyEmailNotification.toggleClass('copy-email-notification--visible');
	}
}

export default CopyEmail;