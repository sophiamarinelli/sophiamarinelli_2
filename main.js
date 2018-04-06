// console.log("1")

// document.addEventListener("click", function(){
// 	console.log("1")
// 	document.body.style.backgroundColor = "black"
// })

$( function() {
    $( ".viewer" ).draggable({
    	// containment:"window",
    });
    $( ".bigtext" ).draggable({});
    $( ".nav" ).draggable({containment:"document"});
    $( ".about" ).draggable({containment:"document"}).resizable({});
  } );


// $(".magnolia, .recipes, .bowie").click(function(){
//     //assign all divs `z-index` = 90 including clicked one
//     $(".magnolia, .recipes, .bowie").css("z-index","90");
//     $(".bowie").

//     //assign `z-index` = 100 to clicked one
//     $(this).css("z-index","100")
// });

// document.getElementById("bowie").onmouseover = function() {
// 	document.getElementById("descriptionbox").style.display = "block";
// 	console.log("1")
// }

// document.getElementById("bowie").onmouseout = function() {
// 	document.getElementById("descriptionbox").style.display = "none";
// 	console.log("1")
// }

$(".bowie").click(function(){
    //assign all divs `z-index` = 90 including clicked one
    $(".magnolia, .recipes, .bowie").css("z-index","90");
    $("#descriptionbowie").css("display","inline-block")

    //assign `z-index` = 100 to clicked one
    $(this).css("z-index","100")
});

$(".magnolia").click(function(){
    //assign all divs `z-index` = 90 including clicked one
    $(".magnolia, .recipes, .bowie").css("z-index","90");
    $("#descriptionmagnolia").css("display","inline-block")

    //assign `z-index` = 100 to clicked one
    $(this).css("z-index","100")
});

$(".recipes").click(function(){
    //assign all divs `z-index` = 90 including clicked one
    $(".magnolia, .recipes, .bowie").css("z-index","90");
    $("#descriptionrecipes").css("display","inline-block")

    //assign `z-index` = 100 to clicked one
    $(this).css("z-index","100")
});