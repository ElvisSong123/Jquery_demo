 function componentFactory(config){

         	var $Div = $('<div class= "component"></div>');
            config.width && $Div.css('width',config.width);
            config.height && $Div.css('height',config.height);
            config.text && $Div.text(config.text);
            config.center && $Div.css({position:'absolute',left:'50%',marginLeft:-config.width / 2});
            config.css && $Div.css(config.css);
            if(config.event){
            	for(var prop in config.event){
            		if(prop != 'keydown'){
            	   		 $Div.on(prop,config.event[prop]);
					}else{
						$(document).on(prop,config.event[prop]);
					}
            	}
			}
               



            $Div.on('cpLeave',function(){
            	var self = $(this);
            	setTimeout(function(){
   				  
            	  config.animateOut && self.animate(config.animateOut,config.delayAni || config.delayAniOut||0,'',function(){
            	  	if(config.lock){
            	  		setTimeout(function(){
            	  	 self.animate({opacity:0,left:config.css.left,marginLeft:'-22px'});
                     
            	  	},1000)
            	  	 
            	  	}else{
            	  		setTimeout(function(){
            	  	 self.animate({opacity:0});
                     
            	  	},1000)
            	  	}
            	  	
            	  });

            	},config.delay || 0)
            })
            $Div.on('cpLoad',function(){
	    	  	
	    	  	var self = $(this);
            	setTimeout(function(){
            		
            	 	config.animateIn && self.animate(config.animateIn,config.delayAni || config.delayAniIn || 0,'',function(){
            	 	
            	  	
            	

            	 });

            	},config.delay || 0)
            })
         
            return $Div;
         }