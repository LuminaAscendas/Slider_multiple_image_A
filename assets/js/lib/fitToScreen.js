
var cont = document.getElementById('responsive_container');
var	cont_1 = document.getElementById('begin_page');
//var	cont_2 = document.getElementById('label_cont');
var	cont_3 = document.getElementById('reset_btn');
var isWebkit = 'webkitRequestAnimationFrame' in window;
var scale = 1;
var slider_width=$('.slider').width()
function resizeApp(){

	if(!begin_entered){
		var winWidth = $("#begin_page").width();
		var winHeight = $("#begin_page").height();
		var appWidth = cont_1.offsetWidth;
		var appHeight = cont_1.offsetHeight;	
		winWidth = window.innerWidth; //retrieve current window width
		winHeight = window.innerHeight;
		  if(winWidth-60 < appWidth || winHeight-60 < appHeight)
        {
	   scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))//-0.01//-0.15; //scaling
        }
            else {
                
                scale=1;
            }
			
			cont_1.style.msTransformOrigin = '0 0';	
			cont_1.style.msTransform = "scale("+scale+","+scale+")";
			cont_1.style.TransformOrigin = '0 0';	
			cont_1.style.Transform = "scale("+scale+")";
			cont_1.style.webkitTransformOrigin = '0 0';
			cont_1.style.webkitTransform = "scale("+scale+")";
			cont_1.style.MozTransformOrigin = '0 0';	
			cont_1.style.MozTransform = "scale("+scale+")";
			$('body').css('height',(bodyheight)+'px');
			$('body').css('background-size','100% '+(bodyheight)+'px');
			$('#whole_container').css('height',($("#begin_page").height()*scale)+$("#text_container").height());
			$('#whole_container').css('width',$("#begin_page").width()*scale);
//			$('.slider').width($('.slider').width()/scale);
		
}else{
		cont = document.getElementById('responsive_container');
		var winWidth = $("#whole_container").width();
		var winHeight = $("#whole_container").height();
		var appWidth = cont.offsetWidth;
		var appHeight = cont.offsetHeight;	
		winWidth = window.innerWidth; //retrieve current window width
		winHeight = window.innerHeight; //retrieve current window height
	  	if(winWidth-60 < appWidth || winHeight-60 < appHeight)
        {
	   scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))//-0.01//-0.15; //scaling
        }
            else {
                
                scale=1;
            }
			
			cont.style.msTransformOrigin = '0 0';	
			cont.style.msTransform = "scale("+scale+","+scale+")";
			cont.style.TransformOrigin = '0 0';	
			cont.style.Transform = "scale("+scale+")";
			cont.style.webkitTransformOrigin = '0 0';
			cont.style.webkitTransform = "scale("+scale+")";
			cont.style.MozTransformOrigin = '0 0';	
			cont.style.MozTransform = "scale("+scale+")";
	
	//-----------------------------------------------------------//
	
/*  			cont_2.style.msTransformOrigin = '0 0';	
			cont_2.style.msTransform = "scale("+scale+","+scale+")";
			cont_2.style.TransformOrigin = '0 0';	
			cont_2.style.Transform = "scale("+scale+")";
			cont_2.style.webkitTransformOrigin = '0 0';
			cont_2.style.webkitTransform = "scale("+scale+")";
			cont_2.style.MozTransformOrigin = '0 0';	
			cont_2.style.MozTransform = "scale("+scale+")"; */

	
			cont_3.style.msTransformOrigin = '0 0';	
			cont_3.style.msTransform = "scale("+scale+","+scale+")";
			cont_3.style.TransformOrigin = '0 0';	
			cont_3.style.Transform = "scale("+scale+")";
			cont_3.style.webkitTransformOrigin = '0 0';
			cont_3.style.webkitTransform = "scale("+scale+")";
			cont_3.style.MozTransformOrigin = '0 0';	
			cont_3.style.MozTransform = "scale("+scale+")";
	
	
			var appWidth = cont.offsetWidth * scale;
			var bodyheight = cont.offsetHeight*scale;
			var bodywidth = cont.offsetWidth*scale;
			var winWidth = window.innerWidth;
			$('body').css('height',(bodyheight)+'px');
			$('body').css('background-size','100% '+(bodyheight)+'px');
			//document.getElementById('whole_container').style.left = ((winWidth - appWidth )/2)+'px';
			$('#whole_container').css('height',($("#responsive_container").height()*scale)+$("#text_container").height());
			$('#whole_container').css('width',$("#responsive_container").width()*scale-0.01);
			console.log($('.sliderBar').width()/scale)
//			$('.sliderBar').width($('.sliderBar').width()*scale);
//	 		$('#sliderBar_id').width($('#slide_cont').width()*scale); 
			$('#slide_cont').width(492*scale)
//			$('.labels').width(664*scale)
//			$('.label').css('left',$('.label').offsetLeft*scale)
			$('#responsive_whole').css('height',($(".imageCont").height()*scale+50))//+$("#text_container").height());
//			$('.slider').css('left',$('.imageCont').position().left);
//			console.log($('#slide_cont').width()*scale)
//	$('#slider').width(Math.round($('#slider').width()/scale)-2);
	
//	document.getElementById("slide_cont").offsetWidth*scale
	
//	$(".ui-slider-handle").css({left:left_pos+'%'});
	
}
	
//	 		$('#slider').width(cont_width); 
	

  	trueValues = [Math.round(0*scale), Math.round(1*scale), Math.round(2*scale), Math.round(3*scale), Math.round(4*scale), Math.round(5*scale)];
	
	values =     [Math.round(0/scale), Math.round(20/scale), Math.round(40/scale), Math.round(62/scale), Math.round(83/scale), Math.round(93/scale)];
	
//		if(Math.round(value*scale)>=93){ 
//				alert();
////		   		console.log('ipod')
//				$('.img6').css('opacity','1');
//		   		$('.ui-slider-handle').attr('aria-valuenow','2014')
//			}

			//$('#responsive_container').css('height',$("#whole_container").height()*scale);
			


	
		
	

}


	

resizeApp();

