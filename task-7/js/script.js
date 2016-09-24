$(document).ready(function(){
	
	var oCityDiv = $("#city").find("div");
	
	oCityDiv.mouseover(function(ev){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		var _this = $(this);
		
		if(target.nodeName.toLowerCase() == 'li'){
			_this.find('li').css('display','block');
			_this.find('li').click(function(){
				var _li = $(this);
				var iCur = _li.text();
				_this.find('.active').text(iCur);
			})
		}
		
		_this.mouseout(function(ev){
			var ev = ev || window.event;
			var target = ev.target || ev.srcElement;
			
			if(target.nodeName.toLowerCase() == 'li'){
			_this.find('li').not('.active').css('display','none');
		}
		})
		
	});
	
		
	
		
	
	
	
});