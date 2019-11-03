(function(){
	$.fn.extend({
		addDropdown:function(options){
			options.wrap = this;
			new navigation(options);
		}
	})
	function navigation(options){
		this.wrap = options.wrap;
		this.href = options.href;
		this.title = options.title;
		this.width = options.width;
		this.color = options.color || '#999';
		this.direction = options.direction || 'Y';
		this.menuList = options.menuList;
		this.menuNum = this.menuList.length;
		this.position = options.position || 'left';
		this.flag = options.flag || null;
		this.render();
		this.bindEvent();
		this.initStyle();
	}

	navigation.prototype.render = function(){

 		var myjd = $('<a id = "myjd "href = " ' + this.href +'">'+ this.title +'</a>');
 		myjd.css({color:this.color}).appendTo(this.wrap);
 		if(this.flag != 'local'){
 			var jdImage = $('<img src = "./image/Darrow.png">').css({width:'8px',height:'8px',backgroundSize:'100% 100%',paddingLeft:'3px'});
 			jdImage.appendTo(myjd);
 		}
 		
 		var dropdown = $('<div class = "dropdown"></div>');
		
		var self = this;
 		this.menuList.forEach(function(ele,index){
 			
 			 var dl = $('<dl></dl>');
 			 if (ele.title) {
                dl.append($('<dt>' + ele.title + '</dt>').css({fontWeight:'bold',color:'black'}))
            }
 			 ele.items.forEach(function(eles,index){
 				$('<dd><a href = " '+ eles.href +' ">'+ eles.name +'</a></dd>')
 					.css({backgroundColor:eles.name == self.title ? 'red' : ''})
 						.appendTo(dl);


 			})
 			dl.appendTo(dropdown);
 			dropdown.appendTo(myjd);
			
 		})
	}
	navigation.prototype.initStyle = function(){
		var self = this;
		if(this.direction == "X"){
			$('.dropdown', this.wrap).css({
                position: 'absolute',
                width: 1160,
                right: -80,
                padding: '15px',
                backgroundColor:'white',
                border: '1px solid #eee',
                display: 'none',
            	zIndex:999
                
            });
            $('.dropdown dl',this.wrap).each(function(index,ele){
            	$(this).css({
            		width:self.menuList[index].width,
            		float:'left',
            		borderRight: index == self.menuList.length - 1 ?  'none' : '1px solid #eee' ,
            		padding:'0 15px',

            		
            	}).find('dd').css({
            		width:self.menuList[index].itemWidth
            	})
            })
            
		}else{
			$('.dropdown',this.wrap).css({
			position:'absolute',
			left:'0px',
			display:'none',
			backgroundColor:'#fff',
			left: this.position == 'left' ? 0 : 'auto',
	        right: this.position == 'right' ? 0 : 'auto',
     		zIndex:999

		})
			$('.dropdown dl',this.wrap).each(function(index,ele){
				$(this).css({
					width:self.flag == 'local' ? self.width * 5: self.width * 2,
					borderBottom:'1px solid #eee',
					overflow:'hidden',
					padding:'10px',
					textAlign:self.flag == 'local' ? 'center' : 'left'
				}).find('dd').css({
					width:self.width,
					float:'left'
				})
			})
		}
	}
	navigation.prototype.bindEvent = function(){
		var self = this;
	   this.wrap.on('mouseenter',function(){
	   		$(this).css({
	   			backgroundColor:'white'
	   		})

	   		$('.dropdown',self.wrap).css({
	   			display:'block'
	   		});
	   		self.wrap.on('mouseleave',function(){
	   			$('.dropdown',self.wrap).css({
	   				display:'none'
	   			})
	   			$(this).css({
	   			backgroundColor:'transparent'
	   		})
	   		})
	   })
	   if(this.flag == 'local'){
	   this.wrap.on('mouseenter','dd',function(e){
 			 $(this).css({backgroundColor:'#d2c9c9'})
 			 

	   	}).on('mouseleave','dd',function(){
	   		$(this).css({backgroundColor:$(this).text() == self.title ? 'red' : 'transparent'})
	   	})
	   	this.wrap.on('click','dd',function(e){
 			 self.title = $(e.target).text();
 			 $('#location a').remove();
 			 $('#location').css({backgroundColor:'transparent'});
 			 self.render();
 			 self.bindEvent();
			 self.initStyle();

	   	})
	   }
	}
}())




