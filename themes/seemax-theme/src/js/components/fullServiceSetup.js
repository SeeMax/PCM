export let faqSetup = () => {

  var r = $.Deferred(); 
 
  $('.single-full-service').each(function(){
    var thisImage = $($(this)).find('.full-service-image-half').outerHeight(true);
    var thisText = $($(this)).find('.full-service-text-half').outerHeight(true);
    var thisFAQ = $($(this)).find('.faqSection');
    var thisPadding = (thisImage - thisText) / 2;
    var faqMargin = (thisImage - thisText) / 2 + 40;
    $($(this)).css('padding-top', thisPadding+'px');
    $(thisFAQ).css('margin-top', faqMargin+'px');
  });

  return r;
}