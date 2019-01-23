function loadingBM(){
  setTimeout('$("#besideMouse").html("IM CHANGING.")', 0);
}
var loadingBMint;
function startLoadingBM(){
  loadingBMint = setInterval(loadingBM, 0);
}

$(document).ready(function(){
  $(document).mousemove(function(e){
    $('body').mousemove(startLoadingBM);
     var cpos = { top: e.pageY + 10, left: e.pageX + 10 };
     $('#besideMouse').offset(cpos);
  });
  $('body').click(function(){
      $('#hidden').css("display", "block");
  });

   // var keyword = "gradient";
   //    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
   //      {
   //          tags: keyword,
   //          tagmode: "any",
   //          format: "json"
   //      },
   //      function(data) {
   //        $(document).click(function(e){
   //          var rnd = Math.floor(Math.random() * data.items.length);

   //          var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

   //          $('body').css('background-image', "url('" + image_src + "')");
   //        });
   //      });

   function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
  function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
      var x = Math.round( Math.random() * 14 );
      var y = hexValues[x];
      a += y;
    }
    return a;
  }
  
  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );
  
  var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  
  document.body.style.background = gradient;
  
}

document.onclick = generate();
});
