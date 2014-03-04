$(document).ready(function(){ 
 //INSERT CODE HERE
 	
 //QUESTION 1
    function Dog () {
        this.bark = function() {console.log("woof!");}
    	}

	function ShibaInu() {}
	ShibaInu.prototype = new Dog();
	ShibaInu.prototype.constructor = ShibaInu;
	ShibaInu.prototype.bark = function () { console.log("much wow very javascript"); }



 //QUESTION 3
	$('.secondbutton').click(function() {
		$('.secondheading').html("Dogs are the best...");
		$(this).css({'background': 'rgb(175, 238, 238)'});
	});

	

 //QUESTION 4

	$("#task4").click(function() {
		$("#hipcat").css({"-webkit-filter": "blur(2px) sepia(0.5)"});
	});

 //QUESTION 5

	$("#car").click(function(){
		$( ".wheel" ).css({'-webkit-animation-name' : 'spin',
			'-webkit-animation-play-state' : 'running'});
		$( ".spincar" ).css({'-webkit-animation-play-state' : 'running'});
	});

 //QUESTION 6
 	$(".nyancat").animate({
 		left: "900"
 	}, 5000, function(){
 	});
 	$(".rainbows").animate({
 		width: "+=800"
 	}, 5500, function(){
 	});

});