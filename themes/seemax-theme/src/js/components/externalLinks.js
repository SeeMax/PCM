export let extLinks = () => {
  $('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
      $(this).click(function(event) {
        if (this.href.indexOf('mailto') != -1 || this.href.indexOf('tel') != -1) {
          
        } else {
          event.preventDefault();
          event.stopPropagation();
          window.open(this.href, '_blank');  
        }
      });
    }
  });
}
