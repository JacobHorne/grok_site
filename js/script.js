/* js file */
//javascript self executing anonymous function
(function( window, undefined ){

	//jquery ready function
	$( function(){

		//downCount plugin init
		$( '.countdown' ).downCount({
			date : '05/11/2016 06:00:00',
			offset : +10
		} );
 
/**********************************************************/

		var visibleStuff = $( ".visible" );
		var win = $( window );
		var offset;
		var top;
		var height;

		visibleStuff.removeClass( "visible");

		win.on( "scroll", function( e ){

			top = win.scrollTop();
			height = win.height() / 2;

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
