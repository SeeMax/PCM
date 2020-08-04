// Import The Menu Close Function to use on mobile
import { menuClose } from './mobileMenu.js';
import { estimatePop } from './estimatePopup.js';

let smoothScrolling = (theLink) => {

  gsap.registerPlugin(ScrollToPlugin);
  event.preventDefault();

  let myScrollTarget = $(theLink).attr("href");
  let headerHeight = $('.header').outerHeight(true); 
  let subNavHeight = $('.services-subnav').outerHeight(true);
  let spacerHeight = headerHeight + subNavHeight + 65;

  if ($('body').hasClass('page-services')) {
    gsap.to(window, {duration:0.5, ease: "back.inOut(.3)", scrollTo:{y:myScrollTarget, offsetY:0}});
  } else if ($('body').hasClass('page-about')) {
    gsap.to(window, {duration:0.5, ease: "back.inOut(.3)", scrollTo:{y:myScrollTarget, offsetY:0}});
  } else {
    gsap.to(window, {duration:0.5, ease: "back.inOut(.3)", scrollTo:{y:myScrollTarget, offsetY:headerHeight}});
  }
}

export let anchorClick = (thisAnchor) => {
  console.log($(thisAnchor).attr('href'));
  // A - If It's an estimate Button Pop Open The estimate
  if($(thisAnchor).attr('href') === '#estimate') { 
    estimatePop($(thisAnchor)); } 
  // A - If It's the FAQ Section Anchor, Scroll to that 
  else if ( $(thisAnchor).attr('href') === '#faqs-section') {
    // B - If not on the about page, add the "/about" prefix and then sedn to rebuilt url
    if (!$('body').hasClass('page-about')) {
      event.preventDefault();
      $(thisAnchor).attr("href", '/about/#faqs-section');
      window.location = $(thisAnchor).attr('href'); } 
    // B - If it's About Page Just Scroll
    else {
      smoothScrolling($(thisAnchor));
      // C - If it's mobile close the menu before you scroll
      if (screen.width <= 1025){
        menuClose();
        smoothScrolling($(thisAnchor));
      }
    }
  // A - If It's any other Anchor, Scroll to it
  } else {
    smoothScrolling($(thisAnchor));
    // B - If it's mobile close the menu before you scroll
    if (screen.width <= 1025){
      menuClose();
      smoothScrolling($(thisAnchor));
    }
  }
  // return false;
}

export let scrollPage = () => {
  if(window.location.hash) {
    gsap.registerPlugin(ScrollToPlugin);
    var hash = window.location.hash; //Puts hash in variable, and removes the # character
    gsap.to(window, {duration:0.5, ease: "back.inOut(.3)", scrollTo:{y:hash, offsetY:0}});
  }
}
