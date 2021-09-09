

$( function() {
    $( ".ct" )
      .draggable({ 
        scroll              : false,
        iframeFix           : true,
        opacity             : 0.35,
        containment         : "window",
        scrollSensitivity   : 50
      })
      
  } );


  $( function() {
    $( "#accordion" ).accordion({
      collapsible           : true,
      active                : false
    })
  } );