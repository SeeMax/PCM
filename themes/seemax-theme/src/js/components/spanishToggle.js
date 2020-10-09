export let spanishToggle = () => {

  if($('body').hasClass('page-careers')) {
    let spanishButton = "<div class='spanish-button spanishToggle'>View in Spanish</div>"
    $('.hero-section .content').prepend(spanishButton);
  }

  $('body').on('click', '.spanishToggle', function(){
    
    if($(this).hasClass('spanishOpen')) {
      $(this).removeClass('spanishOpen');
      $('.spanish-language').hide();
      $('.english-language').show();
      $('.spanishToggle').html('View in Spanish');
    } else {
      $(this).addClass('spanishOpen');
      $('.spanish-language').show();
      $('.english-language').hide();
      $('.spanishToggle').html('View in English')
    }   
  });
}


