/* js file */
//javascript self executing anonymous function
(function( window, undefined ){

	//jquery ready function
	$( function(){



		////////////////////////////////////////
		//Time/////////////////////////////////
		$( '.countdown' ).downCount({
			date : '05/11/2016 06:00:00',
			offset : +10
		} );


		////////////////////////////////////////
		//Text Resizer/////////////////////////
		$("#countdown").fitText( 0.9 );





		////////////////////////////////////////
		//window resize/////////////////////////
		var win    = $( window );
		var header = $( ".main_header" );

		var resize = function(){

			header.css( { "height" : win.height() + "px"});
		};

	    win.on( "resize load", function( e ){

	    	resize();
		});
		

		////////////////////////////////////////
		//Fade In//////////////////////////////
		var visibleStuff = $( ".visible" );
		var win = $( window );
		var offset;
		var top;
		var height;

		visibleStuff.removeClass( "visible");

		win.on( "scroll", function( e ){

			top = win.scrollTop();
			height = win.height() / 1.4;

			visibleStuff.each( function( i, o ){

				var $o = $( o );

				offset = $o.offset().top;

				if ( top >= offset - height && $o.hasClass( "visible" ) === false ){

			       	$o.addClass( "visible" );
			    }
			});
		});
	});
})( window, undefined );
