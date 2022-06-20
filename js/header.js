$( document ).ready( function() {
    var Offset = $( 'header .top .h_inner' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > Offset.top ) {
        $( 'header .top .h_inner' ).addClass( 'sticky' );
      }
      else {
        $( 'header .top .h_inner' ).removeClass( 'sticky' );
      }
    
    });
  });