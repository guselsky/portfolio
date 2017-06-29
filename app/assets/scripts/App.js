import MobileMenu from './modules/MobileMenu';
import CopyEmail from './modules/CopyEmail';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var copyEmail = new CopyEmail();
new Clipboard('.copy-email');