export let estimatePop = (thisBtn) => {
  let tl = new gsap.timeline({defaults:{ease: "back.out(1)", duration: 0.3}});
  let popUp = (".estimatePopup");
  let popContainer = ('.popUpContainer');
  let close = $('.estimateClose');

  $(popUp).addClass("estimateOpen");
  // tl.set($(".wrapper"), {height:"100vh",overflow:"hidden"});
  tl.set(popUp, {display:'inline-block'});
  tl.set(close, {rotation:45});
  tl.set(popContainer, {top:100, rotateX:50});
  tl.to(popContainer, {rotateX:0, top:0, transformOrigin:'center bottom'}, 'openThat');
  tl.to(popUp, {duration:0.2, opacity:1}, 'openThat');
  
  if($(thisBtn).data('estimate')) {
    let thisValue = ($(thisBtn).data('estimate'));
    $(popUp).find('select').val(thisValue);
  }
}

$('.estimateClose').on('click', function(){
  let tl = new gsap.timeline({defaults:{ease: "back.in(1)", duration: 0.3}});
  let popUp = (".estimatePopup");
  let popContainer = ('.popUpContainer');
  
  $(popUp).removeClass("estimateOpen");
  tl.to(popContainer, {rotateX:105, top:100}, 'closeThat');
  tl.to($(this), {duration:0.25,transformOrigin:"50%", rotation:315}, 'closeThat-=0.05');
  tl.to(popUp, {opacity:0}, 'closeThat+=0.05');
  // tl.set($(".wrapper"), {height:"auto",overflow:"visible"});
  tl.set(popUp, {display:'none'});

  return false;
})
