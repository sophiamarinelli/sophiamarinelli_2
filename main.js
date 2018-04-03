// console.log("1")

// document.addEventListener("click", function(){
// 	console.log("1")
// 	document.body.style.backgroundColor = "black"
// })

$( function() {
    $( ".viewer" ).draggable({containment:"document"});
    $( ".viewer" ).resizable({});
    $( ".bigtext" ).draggable({containment:"document"});
    $( ".nav" ).draggable({containment:"document"});
  } );
