$(function() {
	//导航菜单
	$('.m-nav').find('li').hover(function() {
    	$(this).find('.m-pulldown').show();
  	},function() {
		$(this).find('.m-pulldown').hide();
  	});
	
	
});


function tobank(e) {
				if(e.value=='bank'){
					bankh.style.display='block'
				}else{
					bankh.style.display='none'
				}
			}