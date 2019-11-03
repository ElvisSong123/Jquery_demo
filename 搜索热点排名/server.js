(function(data){
var $wrapper = $('.wrapper');
var $data = $(data);
var $ul = $wrapper.find('.content');
var arrcolor = ['#f54545', '#ff8547', '#ffac38'];
var pageall = Math.ceil($data.length / 10);
var prepage = 0;
function bindEvent(){
	var $change = $('.change');
	$change.on('click',function(){
		prepage = ++prepage % pageall;
		render(data);
	})

}

 
 $ul.hide();
function render(data){
$ul.hide().find('.showitem').remove();
 var len = (data.length - prepage*10 ) > 10 ? prepage * 10 + 10 : data.length ;
 var lenmin = prepage == pageall -1 ? prepage*10 : len - 10;
 for(var i = lenmin; i < len ; i++){
 	       var $clone =  $wrapper.find('.remove').clone().removeClass('remove').addClass('showitem');

					$clone
						.find('span').eq(0)
							.text(i+1).css({backgroundColor:prepage == 0&&
								arrcolor[i]})
								.next()
									.text(data[i].title)
										.next()
											.text(data[i].search).addClass((data[i].search - data[i].hisSearch) > 0?
												'up' : 'down');


$ul.append($clone);
 }
  $ul.fadeIn();
         
       
 
       

 
   
}
bindEvent();
render(data);

})(data)
