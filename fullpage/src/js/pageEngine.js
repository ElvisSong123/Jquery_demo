var pageEngine = {
	init : function(selector,colorArray){
        this.$selector = $(selector);
        this.colorArray = colorArray;
        this.pageFlag = false;
         return this;
	},
	addContent:function(className){
        this.$content = $('<div class = "section"\>').addClass(className);
        this.$content.appendTo(this.$selector);
        this.pageFlag = false;
        return this;
	},
	addSlide:function(className){
		this.$slide = $('<div class = "slide"\>').addClass(className);
		this.$slide.appendTo(this.$content);
		this.pageFlag = true;
		return this;
	},
	addComponent:function(config){
		var ocp = null;
		switch(config.type){
			case 'base':
				ocp = componentFactory(config);
			 break;
		}
		this.pageFlag ? this.$slide.append(ocp) : this.$content.append(ocp);

		return this;
	},
	bindEvent:function(){
		this.$selector.find('.section').on({
			_leave:function(){
				$(this).find('.component').trigger('cpLeave');
			},
			_load:function(){
				$(this).find('.component').trigger('cpLoad');
			}
		})
	},
	load:function(){
		var self = this;
		this.bindEvent();
		this.$selector.fullpage({
			colorArray:this.colorArray,
			onLeave:function(index,slideIndex,direction){
			    console.log(index,slideIndex,direction);
            	self.$selector.find('.section').eq(index).trigger('_leave');
			},
			afterLoad:function(index,slideIndex,direction){
				console.log(index,slideIndex,direction);
				self.$selector.find('.section').eq(index).trigger('_load');
			}
		})
		self.$selector.find('.section').eq(0).trigger('_load');
	},
	delay:function(delayTime){
		var self  = this;
		setTimeout(function(){
           self.load();
		},delayTime)
	}




}