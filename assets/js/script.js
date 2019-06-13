var begin_entered=false;
var cont_width;
$(document).ready(function(){
	
	
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
		set_tab()
	})


	$('.imageCont,#begin_container').mouseenter(function(){
		$('.imageCont,#begin_container').attr('title',$('#begin_container').attr('alt'));
	});
	
	$('.imageCont,#begin_container').mouseleave(function() {
  		$( ".imageCont,#begin_container" ).removeAttr('title');
	});
	$('.img1').css('opacity','1');
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
	
	var isAndroid = /(android)/i.test(navigator.userAgent);	
	if(isAndroid){
		setTimeout(function(){
			$('.ui-slider-handle').removeAttr('role');
		},10)
	}
	/*Dinesh codding*/
	
	
var slider = $("#slider").slider({
	  orientation: 'horizontal',
	  range: false,
	  min: 1,
	  max: 2,
	  values: [0],
	  value:1,
      step:0.8,
	
		
	  slide: function(event, ui) {
		  var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
		  var includeRight = event.keyCode != $.ui.keyCode.LEFT;
		  var value = findNearest(includeLeft, includeRight, Math.round(ui.value));
		  slider.slider('values', 0, ui.value);
	      //rangePercent = getRangePercent(ui.value);
		  //console.log(ui.value);
			displayImage(ui.value);
		  //console.log(":::::::::::::::::::::",(getRealValue(slider.slider('values', 0))+rangePercent))
		  console.log("start point", (ui.value))
		  return false;
		  
	  },
	  stop: function( event, ui ) {
		  var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
		  var includeRight = event.keyCode != $.ui.keyCode.LEFT;
		  var value = findNearest(includeLeft, includeRight, ui.value);
		  slider.slider('values', 0, ui.value);
		  //console.log("end point", ui.value);
		  //adjustSlider((getRealValue(slider.slider('values', ui.value))));
		  
		  adjustSlider(ui.value);
	  }
  });
	
			
		var flag_touch=0;
	if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {		
$(document).on('click touchstart', '.ui-slider-handle', function(event){
//			if ($(".ui-slider-handle").is(":focus")) {
				//alert()
				if(event.handled === false) return
				event.stopPropagation();
				event.preventDefault();
				event.handled = true;
				$("#slider").slider("option", "values", [value[flag_touch]]);
				var isAndroid = /(android)/i.test(navigator.userAgent);	
				if(isAndroid){
					setTimeout(function(){
						$('.ui-slider-handle').blur()//.focus();
						setTimeout(function(){
							$('.ui-slider-handle').focus()
						},5)
					},10)
				}
			
				flag_touch++
				if(flag_touch>value.length-1){
					flag_touch=0
				}
//			}
		});
	}
function findNearest(includeLeft, includeRight, value) {
	var nearest = null;
	var diff = null;
	for (var i = 0; i < values.length; i++) {
		if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
			var newDiff = Math.abs(value - values[i]);
			if (diff == null || newDiff < diff) {
				nearest = values[i];
				diff = newDiff;
			}
		}
	}
	return nearest;
}
	
function getRangePercent(value){
	var firstVal = values[0];
	var secondVal = values[values.length-1];
	for (var i = 0; i < value.length; i++) {
		if (value <= value[i])
		{
			secondVal = value[i];
			break;
		}
		firstVal = value[i];
	}
	var valA = secondVal-firstVal;
	var valB = value-firstVal;
	return Number((valB/valA).toFixed(2));
}

 var slideEnd=1;    
function adjustSlider(val){
	$( "#slider" ).slider("value",val);
	slideEnd = val;
	  if(slideEnd>=1.5){
			slideEnd=2;
			$('#ui_handler').css('left','100%');
			$('#heading_text').html(data[0].description[1]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());
			$('.ui-slider-handle').attr('aria-label','Dark-red burn areas mark the burn scars where many wildfires destroyed the Alaskan landscape during June - August of 2015. At the peak of the summer wildfire season, multiple wildfires can break out each day.');	
		  $("#slider").slider("values", "0", 2);
	  }
	  else{ 
			slideEnd=1;
			$('#ui_handler').css('left','0%');
			$('#heading_text').html(data[0].description[0]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());	
		  	$('.ui-slider-handle').attr('aria-label','Wildfires burned more than 5 million acres of the Alaskan landscape over two months during the summer of 2015. NASA satellite images captured the resulting fire damage.');
			$("#slider").slider("values", "0", 1);
	  }
	displayImg(slideEnd);
	console.log('adustjest slider',val,slideEnd);
}

function getRealValue(sliderValue) {
	for (var i = 0; i < value.length; i++) {
		
		if (value[i] >= sliderValue) {
			return (i);
		}
	}
	return 0;
}
	
function displayImage(val){
	displayImg(val);

}
	
String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

    function displayImg(val)
    {
		/* console.log("thirumal", val); */
        var roundVal = Number(String(val).split(".")[0]);
        var decimalAfterVal = Number(String(val).split(".")[1]);
        var nxtImg = -1;
        var decimalFirstVal = Number(String(val).replaceAt(0, "0"));

        if (decimalFirstVal+'' != 'undefined' && ! isNaN(decimalFirstVal))
        {
            nxtImg = roundVal + 1;
        }else{
            decimalFirstVal = 0;
        }

        if (nxtImg != -1)
        {
            //console.log(val,">>>>",roundVal, nxtImg)
            var inc = decimalFirstVal;
            var dec = 100-decimalFirstVal;
			
            //$('.textDiv').html(data[0].description[nxtImg-2]); 

            $(".imgC").css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+0+')"', 
            'filter': 'alpha(opacity='+0+')',
            '-moz-opacity':(0/100),
            '-khtml-opacity': (0/100),
           'opacity': (0/100)});

            $(".img"+roundVal).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+dec+')"', 
            'filter': 'alpha(opacity='+dec+')',
            '-moz-opacity':(dec/100),
            '-khtml-opacity': (dec/100),
           'opacity': (dec/100)});

            $(".img"+nxtImg).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+inc+')"', 
            'filter': 'alpha(opacity='+inc+')',
            '-moz-opacity':(inc),
            '-khtml-opacity': (inc),
           'opacity': (inc)});
        }

        /*
        {'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"', 
        'filter': 'alpha(opacity=50)',
        '-moz-opacity':'0.5',
        '-khtml-opacity': '0.5',
       'opacity': '0.5'}*/
    }
$('.ui-slider-handle').addClass('customPlayhead')
$('.ui-slider,.ui-slider-range').addClass('sliderRange');
//$('#text_container').html(direction_text);
//$('#text_container').attr('aria-label',$('#text_container').text())


/*Dinesh code end */
	
	
	/*Slider function start here*/
/* 	        $( "#slider" ).slider({
               	orientation: 'horizontal',
				range: false,
                min: 1,
                max: 2,
                value:1,
                step:0.01,
                slide: function( event, ui ) {
                   displayImage(ui.value);
                },
                stop: function( event, ui ) {
                    adjustSlider(ui.value);
                }
            });
			setTimeout(function(){
				$('.ui-slider-handle').addClass('customPlayhead').addClass('tabindex');
				$('.ui-slider,.ui-slider-range').addClass('sliderRange');
				$('.ui-slider-handle').bind('keyup',showTextFn)
			},100) */
	/*Slider function end here*/
		/* var flag_touch=0;
	if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {		
$(document).on('click touchstart', '.ui-slider-handle', function(event){
//			if ($(".ui-slider-handle").is(":focus")) {
				//alert()
				if(event.handled === false) return
				event.stopPropagation();
				event.preventDefault();
				event.handled = true;
				$("#slider").slider("option", "values", [value[flag_touch]]);
				var isAndroid = /(android)/i.test(navigator.userAgent);	
				if(isAndroid){
					setTimeout(function(){
						$('.ui-slider-handle').blur()//.focus();
						setTimeout(function(){
							$('.ui-slider-handle').focus()
						},5)
					},10)
				}
			
				flag_touch++
				if(flag_touch>value.length-1){
					flag_touch=0
				}
//			}
		});
	}
 */

	
			
});
$(window).resize(function(){
  resizeApp();
});	

/*Slider strt*/

    /*  function showTextFn(e){
       if(e.type=="keyup" && e.keyCode !=13){
         console.log('thr', e.keyCode)
                return  true;
        }
        var sliderVal = $( "#slider" ).slider( "value" );
		
        if (sliderVal>=1 && sliderVal<=10) {
            sliderVal = sliderVal+1;
        }
        if (sliderVal > 10) {
            sliderVal = 1;
            $( "#slider" ).slider("value",Math.round(sliderVal));
            displayImage(sliderVal)
			alert('1 tthe');
			
        }else{
            $( "#slider" ).slider("value",Math.round(sliderVal));
            displayImage(sliderVal);
			alert('2 tthe');
        }
    }
	var flagYear=false;
	function adjustSlider(val){
        console.log("Val: "+Math.round(val))
		
		if(val==2){
			$('#heading_text').html(data[0].description[1]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());	
            $('.ui-slider-handle').attr('aria-label',"september");
 			flagYear=true;
		
		}else{
			$('#heading_text').html(data[0].description[0]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());	
            $('.ui-slider-handle').attr('aria-label',"june");
			flagYear=false;	
		}
		
        $( "#slider" ).slider("value",Math.round(val));
        displayImg(Math.round(val));
    }
    function displayImage(val){
        displayImg(val);
    }
    String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
    }
    function displayImg(val){
        var roundVal = Number(String(val).split(".")[0]);
        var decimalAfterVal = Number(String(val).split(".")[1]);
        var nxtImg = -1;
        var decimalFirstVal = Number(String(val).replaceAt(0, "0"));

        if (decimalFirstVal+'' != 'undefined' && ! isNaN(decimalFirstVal))
        {
            nxtImg = roundVal + 1;
        }else{
            decimalFirstVal = 0;
        }

        if (nxtImg != -1)
        {
            console.log(val,">>>>",roundVal, nxtImg)
            var inc = decimalFirstVal;
            var dec = 100-decimalFirstVal;
			
            $('.textDiv').html(data[0].description[nxtImg-2]); 

            $(".imgC").css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+0+')"', 
            'filter': 'alpha(opacity='+0+')',
            '-moz-opacity':(0/100),
            '-khtml-opacity': (0/100),
           'opacity': (0/100)});

            $(".img"+roundVal).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+dec+')"', 
            'filter': 'alpha(opacity='+dec+')',
            '-moz-opacity':(dec/100),
            '-khtml-opacity': (dec/100),
           'opacity': (dec/100)});

            $(".img"+nxtImg).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+inc+')"', 
            'filter': 'alpha(opacity='+inc+')',
            '-moz-opacity':(inc),
            '-khtml-opacity': (inc),
           'opacity': (inc)});
        }

	} */	
/*Slider function end here*/
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
		$('.imageCont').addClass('tab_index');
		$('.ui-slider-handle').addClass('tab_index');
		$('#reset_btn').addClass('tab_index');
		$('.close_button').addClass('tab_index');
	
		$('#dummy_1,#dummy_2').addClass('tab_index');
	}
	$('.tab_index').each(function(){
    		$('.tab_index').attr('tabindex','0');
  });
}
