// console.log("1")

// document.addEventListener("click", function(){
// 	console.log("1")
// 	document.body.style.backgroundColor = "black"
// })

$( function() {
    $( ".viewer" ).draggable({containment:"document"}).resizable({aspectRatio: 4 / 3});
    $( ".bigtext" ).draggable({containment:"document"});
    $( ".nav" ).draggable({containment:"document"});
    $( ".about" ).draggable({containment:"document"}).resizable({});
  } );

$(".viewer").click(function(){
	console.log("1")
    $(".viewer").css("zIndex", 9999);
 });
