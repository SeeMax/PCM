export let buildServicesNav = () => {
  var hero = $('.page-services .hero-section');
  var subNav = '<div class="services-subnav"><div class="content"></div></div>'
  $(hero).after(subNav);
}

export let buildServicesLinks = () => {

  $('.single-full-service').each(function() {
    let thisID = $(this).find('.service-anchor').attr('id');
    let cleanID = thisID.replace(/[^a-zA-Z ]/g, "").toLowerCase();
    let thisName = $(this).find('h2').html();
    let thisLink = "<a href='#"+cleanID+"'>"+thisName+"</a>";
    $('.services-subnav .content').append(thisLink);
  })
}

export let pinServicesLinks = () => {

  let headerHeight = $('.header').outerHeight(); 
  let subNavHeight = $('.services-subnav').outerHeight();
  let spacerHeight = headerHeight + subNavHeight + 35;
  let st = ScrollTrigger.create({
    trigger: ".services-full-section",
    pin: ".services-subnav",
    start: "-="+spacerHeight+"",
    pinSpacing: false,
    end: "+=9999999999" 
  });
}