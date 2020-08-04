export let faqHeight = () => {
  $('.singleFaq').each(function(){
    let question = $(this).find('.faqQuestion');
    let qHeight = question.outerHeight(true);

    $(this).css('height', qHeight);
  });
}


export let faqToggle = () => {
  $('.singleFaq').on('click', function(){
    let trigger = $(this).find('.faqTrigger');
    let answer = $(this).find('.faqAnswer');
    let question = $(this).find('.faqQuestion');
    let qHeight = question.outerHeight(true);
    let aHeight = answer.outerHeight(true);
    let fullHeight = qHeight + aHeight;
    let tl = new gsap.timeline({defaults:{ease: "power2.inOut", duration: 0.3}});
    
    if($(this).hasClass('faqOpen')) {
      $(this).removeClass('faqOpen');
      tl.to($(this), {height:qHeight},'close');
      tl.to(trigger, {rotate:0, top:0, transformOrigin:"50% 50%"},'close');  
    } else {
      $(this).addClass('faqOpen');
      tl.to($(this), {height:fullHeight},'open');
      tl.to(trigger, {rotate:135, top:6,transformOrigin:"50% 50%"},'open');  
    }   
  });
}


