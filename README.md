Clean Box
========

##A lightweight responsive modal built with love.

###What is Clean Box

Clean Box is a lightweight responsive modal built with love.

###How Clean Box Works

Clean Box works by attaching to the body tag and waiting for instruction. Arguments can be passed in on fly or or at runtime.  Call Clean Box with JavaScript or be a bit more traditional and used HTML. 

####Implementation
#####Quick Start

	1.	Download Clean Box
	2.	Add cleanBox.js to the head of a page
	3.	Pick your method for using Clean Box 

####Detailed Setup

	1.	Download the Clean Box repository
	2.	Review the provided examples
	3.	Add cleanBox.js to the head of a page
	4.	Pass in the appropriate arguments to meet your needs.
	1.	contents - The HTML to be displayed inside Clean Box
	2.	showOnCall - Show the Clean Box when called
	3.	removeAfterClose - Remove Clean Box from the DOM after close
	4.	onOpen - Callback function to execute after cleanBox is visible
	5.	onClose - Call back function to execute after cleanBox is visible
	5.	Call Clean Box with $.cleanBox({ option : value }); at runtime or on the fly. If you need help making a decision, review the examples.

#####Examples
######Using Clean Box with only JavaScript

```html
<!-- Build Clean Box on the fly -->         
     <div class="button">Show me that Clean Box!</div>
     <script>
     $('.button').on('click', function(){
          $.cleanBox({
               contents: '<h1>Clean Box</h1><p>You see me doing what I do best!</p>',
               showOnCall: true    
           });
    
     }); 
```
#####Be traditional and use HTML

```html
     <!-- Build Clean Box from the DOM -->
     <div class="cleanBox" data-cleanbox="box1">
          <h1>Boom.</h1>
          <p>I'm super clean, right?</p>
     </div>
    
     <!-- A button to show that Clean Box -->
     <a href="#" data-cleanbox-button="box1">Show me that box</a>

```

#####Two Clean Boxes at the same time

```html
<!-- Build Clean Box from the DOM -->
	<div class="cleanBox" data-cleanbox="box1">
		<h1>Boom.</h1>
		<p>I'm super clean, right?</p>
	</div>
		
	<!-- A button to show that Clean Box -->
	<a href="#" data-cleanbox-button="box1">Show me that box</a>
	
	<!-- Build Clean Box from the DOM -->
	<div class="cleanBox" data-cleanbox="box2">
		<h1>What What.</h1>
		<p>I'm that other super clean box.</p>
	</div>
	
	<!-- A button to show that Clean Box -->
	<a href="#" data-cleanbox-button="box2">Show me that other box</a> 
```	