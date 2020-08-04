export let preLoaderOn = () => {
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
}