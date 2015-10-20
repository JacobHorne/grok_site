/* js file */
//javascript self executing anonymous function
(function( window, undefined ){

	//jquery ready function
	$( function(){

		var hasAnimatedIn = false;
		var speakers = $( ".speakers img" );
		var win = $( window );
		var offset;
		var top;
		var height;

		//downCount plugin init
		$( '.countdown' ).downCount({
			date : '05/11/2016 06:00:00',
			offset : +10
		} );


		speakers.css( "opacity", 0.05 );

		win.scroll( function() {

			offset = speakers.offset().top;
			top    = win.scrollTop();
			height = win.height() / 2;

		    if ( top >= offset - height && hasAnimatedIn === false ){

		    	console.log("hello");
		    	hasAnimatedIn = true;
		        speakers.animate( { "opacity" : 1 }, 1100 );
		       	//$(speakers).addClass(".fadein");

		    }
		});

	});

})( window, undefined );
