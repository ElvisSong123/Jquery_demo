$.fn.extend({
	fullpage:function(config){
		var colorArray = config.colorArray;
        var $wrapper = $(this);
        var $section = $('.section') 
        var commonStyle = {
        	width:'100%',
        	height:'100%'
        }
        var clientWidth = window.innerWidth;
        var clientHeight = window.innerHeight;
        console.log(clientHeight+ " "+clientWidth);
         
        var curpage = 0;
        var curslidepage = 0;
        var lock = true;
        
        $('html')
        	.add('body')
        		.css({position:'relative',margin:0,padding:0,overflow:'hidden'})
		    		  .add($wrapper)
		    			 .add($section)
		    				.css(commonStyle)
		$wrapper
			.css({position:'absolute',top:0,left:0})
	     		.find('.section')
 					.each(function(index,ele){
 						$(ele).css({backgroundColor:colorArray[index],position:'relative',overflow:'hidden'})
 							.find('.slide')
 								.each(function(index1,ele1){
 									$(ele1).css({float:'left',width:clientWidth,height:clientHeight,backgroundColor:colorArray[index1 % 4],position:'relative'})
 								})
 								
 									.wrapAll('<div class = "innerWrapper"></div>')
 					})	
 		$section.
 			find('.innerWrapper')
 				.css({position:'relative'})
	 				.each(function(index,ele){
	 					$(ele)
	 						.css({
						 		 width: $(ele).find('.slide').size() * clientWidth,
						  		 height:clientHeight})
	 				})
 		$wrapper
 			.find('.section')
 				.eq(0)
 					.addClass('active')
 						.end()
 							.each(function(index,ele){
 									$(ele).find('.innerWrapper').find('.slide').eq(0).addClass('innerActive')
 								})







 		$(document).on('keydown',function(e){
            var code = e.keyCode;
            
            var newTop = $wrapper.offset().top;
			      var $swSize = $wrapper.find('.active').find('.innerWrapper').size();

            var curposition = null;
           	if(code == 38 || code == 40){
           		if(lock){
           		   lock = false;
	           	   if(code == 38 && curpage != 0){
	           	   	   curposition = 'top';
                     config.onLeave(curpage,curslidepage,curposition)
		                 curpage --;
		                 newTop += clientHeight;
		               

           	}else if(code == 40 && curpage != $section.size() - 1){
             		curposition = 'bottom';
             		config.onLeave(curpage,curslidepage,curposition);
             		curpage ++;
                console.log(clientHeight);
                newTop -= clientHeight;
                console.log(newTop);
               
              
           	}
           	 $wrapper.animate({top:newTop},1500,'easeInOutQuart',function(){
               	lock = true;
               	$section.eq(curpage).addClass('active');
               	if(curposition ==' top'){
                   $section.eq(curpage + 1).removeClass('active');
 			 		}else{
                   $section.eq(curpage - 1).removeClass('active');

 			 		}
 			 		 config.afterLoad(curpage,curslidepage,curposition);	
               })
           		}
           


             }
            
            
           
           	
           	if( $swSize && (code == 37 || code == 39)){
             
           		if(lock){	
           			    lock = false;
                    var $sw = $wrapper.find('.active').find('.innerWrapper');
  			           	var curshowdom = $sw.find('.innerActive');
  			           	var newLeft;
  			           	$sw.offset() ? newLeft = $sw.offset().left : newLeft = '';
  			           	var direction = null;
             			 	if(code == 37 && curshowdom.index() != 0 ){
                      direction = 'left';
                      config.onLeave(curpage,curslidepage,direction);
                      curslidepage --;    
  			              newLeft += clientWidth;
  			              console.log('aaa');

  			           	}else if(code == 39 && curshowdom.index() != $sw.find('.slide').size() -1 ){
			                  direction = 'right';
                        config.onLeave(curpage,curslidepage,direction);
                        curslidepage ++;
                        newLeft -= clientWidth;
                        console.log('bbb');
  			               
  			           	}
  			 			$('.innerWrapper').animate({left:newLeft},1500,'easeInOutQuart',function(){

	                lock = true;
	                direction != null ? curshowdom.removeClass('innerActive') : '';
  			     			if(direction == 'left'){
  			     				curshowdom.prev().addClass('innerActive');
  			     			}else{
  			     				curshowdom.next().addClass('innerActive');
  			     			}
                    config.afterLoad(curpage,curslidepage,direction)
  			            })
           		}
          
           }
            
          

           
 		})	



        
	}
})


jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});