/**************************************************

 Clean Box v1.0

 by Harrison DeStefano		
 
 License @ https://github.com/harrisonde/cleanbox

***************************************************/

(function($){  
	$.cleanBox = function(options){
		
		var defauls = new Object, options, $cleanBox,  $closeBtn, cleanBoxNumber, finalStructire;

		defaults = {
			contents: "<h1>Clean Box</h1><p>It is just so clean. Right?</p>",    // Content displayed by default
			showOnCall: false,												     // Display cleanBox when called
			removeAfterClose: false,										     // Remove cleanBox from the DOM after close
			onOpen: undefined,													 // Run a function before cleanBox is visible
			onClose: undefined													 //	Run a function after cleanBox is visible
		}
		
		options = $.extend(defaults, options);
		
 		// Variables
		_contents = options.contents;
		_showOnCall = options.showOnCall;
		_removeAfterClose = options.removeAfterClose;
		_onOpen = options.onOpen;
		_onClose = options.onClose;
		$cleanBoxDomData = $('[data-cleanbox]');
		$cleanBox = $('#cleanBox');

		
		// Do we have any dom that needs to be pickedup?
		if($cleanBoxDomData.length > 0){
			
			$($cleanBoxDomData).each( function(){
				
				_contents = $(this).html();
	
				cleanBoxNumber = $(this).attr('data-cleanbox');
							
				boltOnCleanBox(_contents, cleanBoxNumber);
				
			});
		
		} else{
			
			boltOnCleanBox(_contents);
			
		} 
		
		function boltOnCleanBox(_contents, cleanBoxNumber){
		
			// Create our Clean Box HTML Structure
			finalStructire = '<div id="cleanBox" cleanBox="'+cleanBoxNumber+'"><div class="background"></div><div class="contents">'+_contents+'<div class="close">x</div></div></div>';
			
			// Create and append 
			$(finalStructire).appendTo('body');	
			
			$cleanBox = $('#cleanBox');
			$closeBtn = $('#cleanBox .close');

			bindCleanBoxEvent();
			
			// Do we need to show cleanBox on call?
			if(_showOnCall){
				
				showCleanBox();
			
			}
		
		}
		
		function showCleanBox(cleanBoxNumber){
							
			if(cleanBoxNumber != undefined){
				
				$('[cleanBox="'+cleanBoxNumber+'"]').fadeIn( 400, function(){			
					// You can see cleanBox, it's callback time
					if(_onOpen != 'undefined'){
					
						var F=new Function (_onOpen);
					
						return(F());
					
					}
					
				});	
				
				
			} else {

				$($cleanBox).fadeIn( 400, function(){			
					// You can see cleanBox, it's callback time
					if(_onOpen != 'undefined'){
					
						var F=new Function (_onOpen);
					
						return(F());
					
					}
					
				});	
			
			}	
			
		}
		
		function bindCleanBoxEvent(){
				
			// Open the right Clean Box
			$('[data-cleanbox-button]').on('click', function(){
				
				cleanBoxNumber = $(this).attr('data-cleanbox-button');
				
				showCleanBox(cleanBoxNumber);
					
			});
		
			// Close that Clean Box away, we're done.
			 $('#cleanBox .close').on('click', function(){
				
				$(this).closest('#cleanBox').fadeOut(400, function(){
					
					// If remove after close
					if(_removeAfterClose === true){
						
						$cleanBox.remove();
						
					}
					
					// You can see cleanBox, it's callback time
					if(_onClose != 'undefined'){
					
						var F=new Function (_onClose);
					
						return(F());
					
					}
					
				});	
				
			});
		}
		
	return this;
	}// end Plugin
})(jQuery);