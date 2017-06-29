import $ from 'jquery';

class CopyEmail {
	constructor() {
		this.copyEmail = $('#copy-email');
		this.email = $('#email');
		this.events();

	}

	events() {
		this.copyEmail.click(this.copyToClipboard.bind(this));
	}

	copyToClipboard() {
		const email = 'david@gusel.org';
		console.log(email);
		
		// document.execCommand('copy', false, this.email[0].innerHtml.select());
	}
}

export default CopyEmail;