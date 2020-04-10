import MobileMenu from './modules/MobileMenu';
// import RevealOnScroll from './modules/RevealOnScroll'
// import $ from 'jquery';
import SmoothScroll from './modules/SmoothScroll';

var mobileMenu = new MobileMenu();
var copyEmail = new CopyEmail();
new Clipboard('.copy-email');
// new RevealOnScroll($(".portfolio__item"), "85%");
// new RevealOnScroll($(".testimonials__testimonial"), "90%");
// new RevealOnScroll($(".about-me"), "90%");
var smoothScroll = new SmoothScroll();