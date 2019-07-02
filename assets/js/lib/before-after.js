
function drags(dragElement, resizeElement, container) {
	console.log(dragElement)
  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown vmousedown', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - e.pageX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // Set limits
    minLeft = containerOffset + 0;
    maxLeft = containerOffset + containerWidth - dragWidth - 3;
    
    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove", function(e) {

      leftValue = e.pageX + posX - dragWidth;
      
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // Translate the handle's left value to masked divs width.
      widthValue =(leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
	  //dragcount=(leftValue + dragWidth/2 - containerOffset)*100/containerWidth;
		
      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup vmouseup', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
	 
    }).on('mouseup vmouseup', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable'); 
		dragcount=$('#handle').position().left / $('#handle').parent().width() * 100;
		if(dragcount<5){
			$('#heading_text').html(data[0].description[0]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());
			$('#handle').attr('aria-label',$('#heading_text').text());
			$('#handle').attr('aria-valuenow',Math.round(dragcount));
		}
		else if(dragcount>95){
			$('#heading_text').html(data[0].description[1]);	
			$('#heading_text').attr('aria-label',$('#heading_text').text());
			$('#handle').attr('aria-label',$('#heading_text').text());		
			$('#handle').attr('aria-valuenow',Math.round(dragcount));			
		}		
    });
    e.preventDefault();
  }).on('mouseup vmouseup', function(e){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}

// Call & init
$(document).ready(function(){
  $('.imageCont').each(function(){
    var cur = $(this);
    // Adjust the slider
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    // Bind dragging events
    drags(cur.find('.handle'), cur.find('.resize'), cur);
  });
});

// Update sliders on resize. 
$(window).resize(function(){
  $('.imageCont').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});
