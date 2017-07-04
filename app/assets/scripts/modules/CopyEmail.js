import $ from 'jquery';

class CopyEmail {
	constructor() {
		this.copyEmail = $('.copy-email');
		this.mailTo = $('.mailto');
		this.copyEmailNotification = $('.copy-email-notification');
		this.events();
	}

	events() {
		this.copyEmail.click(this.copyToClipboard.bind(this));
		this.mailTo.click(this.clickMailTo.bind(this));
	}

	copyToClipboard() {
		console.log('clicked');
		this.copyEmailNotification.toggleClass('copy-email-notification--visible');
	}

	clickMailTo() {
		console.log('clicked2');
	}
}

export default CopyEmail;