import {preLoaderOn} from './preloader';
import {extLinks} from './externalLinks';
import {mailchimpScripts} from './loadMailchimpScripts.js';
import {faqToggle, faqHeight } from './faqToggle.js';
import {buildServicesNav, buildServicesLinks, pinServicesLinks} from './buildServiceMenu.js';
import {faqSetup} from './fullServiceSetup.js';
import {anchorClick, scrollPage} from './anchorLinks.js';

$(window).on("load", function() {  
  preLoaderOn();
  if($('#mc_embed_signup').length) {
    mailchimpScripts();
  }
  extLinks();
  faqHeight();
  faqToggle();
  if ($('body').hasClass('page-services')) {
    buildServicesNav();
    buildServicesLinks();
    pinServicesLinks();
  }
  $('a[href^="#"]').on('click', function() {  
    anchorClick($(this));
  });
  if($(window).width() > 1024) {
    faqSetup().done(scrollPage());
  }
});


$(window).resize(function(){
  faqHeight();
  if($(window).width() > 1024) {
    faqSetup();
  } else {
    $('.faq-section').css('margin-top', 40);
  }
});
