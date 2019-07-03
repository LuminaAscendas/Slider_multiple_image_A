var begin_entered=false;
var cont_width;
$(document).ready(function(){
	
	obj=document.getElementById("handle");
	obj.addEventListener("touchstart", touchHandler, true);
	obj.addEventListener("touchmove", touchHandler, true);
	obj.addEventListener("touchend", touchHandler, true);
	obj.addEventListener("touchcancel", touchHandler, true); 
	
	
	$(document).delegate('.ui-page', 'touchmove', false);
	$('#begin_btn').off('click').on('click',function(){
		begin_entered=true;
		$('#btn_container').fadeIn(1000);
		$('#begin_page,#begin_btn').hide();
		$('#responsive_container,#text_container, #heading_text').fadeIn(1000);
		$('.slider').fadeIn(1000);
		$('#whole_container').attr('role','application');
		$('a').attr('href','#reset_btn');
		$('#reset_btn').show();
		resizeApp();
		set_tab();
		$("#handle").off('keydown').on('keydown', handleDragByKey);
		
	})


	$('.imageCont,#begin_container').mouseenter(function(){
		$('.imageCont,#begin_container').attr('title',$('#begin_container').attr('alt'));
	});
	
	$('.imageCont,#begin_container').mouseleave(function() {
  		$( ".imageCont,#begin_container" ).removeAttr('title');
	});
	$('#text_container').html(direction_text);
	$('#text_container').attr('aria-label',$('#text_container').text())
	
	$('#heading_text').html(data[0].description[0])	
	$('#heading_text').attr('aria-label',$('#heading_text').text())	
	
	set_tab()
	
	document.body.onkeyup = function(e){
		//console.log(document.activeElement.id)
		if(e.keyCode == 32 || e.keyCode == 13){
			e.preventDefault(e);
				$('#'+e.target.id).trigger('click');
		}
	}
/*Begin Btn*/	
	$('#begin_dummy').on('focus',function(){
		$('.tab_index').eq(1).focus();	
	})
	$('#begin_reverse_dummy').on('focus',function(){
		$('.tab_index').eq(1).focus();
	})

/*Reverse Btn*/	
	
 	$('#reset_btn').off('click').on('click',function(){
		location.reload();	
	})
	
/*Second page*/
	
	$('#dummy_1').on('focus',function(){
		console.log('dumy-1');
			$('.tab_index').eq(1).focus();
			$('#whole_container').removeAttr('role');
	})
	$('#dummy_2').on('focus',function(){
		console.log('dumy-2');
		$('.tab_index').eq(0).focus();
	})
	$('#text_container').on('focus', function(event){
		$('#heading_text').addClass('tab_index').attr('tabindex','0');
	})

	
	


	$('#handle').attr('aria-label',$('#heading_text').text());
	document.body.onkeyup = function(e){
		if(e.keyCode == 32 || e.keyCode == 13){
			e.preventDefault(e);
			if(e.target.id!='label_head_1'||e.target.id!='label_head_2'||e.target.id!='label_head_3'){
				$('#'+e.target.id).trigger('click');
				$('#'+e.target.id).focus();
			}
			
		}
		
	}
			
});
$(window).resize(function(){
  resizeApp();

});	


// Tab functionality
function set_tab(){
	if(begin_entered==false){
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#begin_container').addClass('tab_index');
		$('#begin_btn').addClass('tab_index');
		$('#begin_dummy,#begin_reverse_dummy').addClass('tab_index');
	}else{
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#text_container').addClass('tab_index');
		//$('.imageCont').addClass('tab_index');
		$('.ui-slider-handle').addClass('tab_index');
		$('#handle').addClass('tab_index');
		$('#reset_btn').addClass('tab_index');
		$('.close_button').addClass('tab_index');
	
		$('#dummy_1,#dummy_2').addClass('tab_index');
	}
	$('.tab_index').each(function(){
    		$('.tab_index').attr('tabindex','0');
  });
}

function handleDragByKey(event) {

		var dragCount=$('#handle').position().left / $('#handle').parent().width() * 100
        if (event.type == "keydown" && event.keyCode != 39 && event.keyCode != 37) {
            return true;
        }
		console.log(dragCount)
        event.preventDefault();
        if(event.keyCode==39 && dragCount<=98){
			dragCount++;
			$('#handle').css('left',dragCount+'%');
			$('.resize').css('width',dragCount+'%');
		}else if(event.keyCode==37 && dragCount>1){
			dragCount--;
			$('#handle').css('left',dragCount+'%');
			$('.resize').css('width',dragCount+'%');
		}
		$('#handle').attr('aria-valuenow',Math.round(dragCount));		
		if(dragCount<5){
			$('#heading_text').html(data[0].description[0]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());
			$('#handle').attr('aria-label',$('#heading_text').text());

		}	
		else if(dragCount>95){
			$('#heading_text').html(data[0].description[1]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());	
			$('#handle').attr('aria-label',$('#heading_text').text());
		}
}


/*********************************************/


function touchHandler(event){
	event.preventDefault();
	var touches = event.changedTouches,
		first = touches[0],
		type = "";

		 switch(event.type)
	{
		case "touchstart": type = "mousedown"; break;
		case "touchmove":  type="mousemove"; break;        
		case "touchend":   type="mouseup"; break;
		default: return;
	}
	
	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
	first.target.dispatchEvent(simulatedEvent);
}