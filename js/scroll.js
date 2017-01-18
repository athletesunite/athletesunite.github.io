$(document).ready(function(){
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});

(function($){

  function generateStar(canvas, ctx, starRadius){
			ctx.beginPath();
            var x = starRadius + (Math.random() * canvas.width);
            var y = starRadius + (Math.random() * canvas.height);
            while ((x >= starRadius + canvas.width/4 && x <= starRadius + (canvas.width - canvas.width/4))
                && (y >= starRadius + canvas.height/4 && y <= starRadius + (canvas.height - canvas.height/4))) {
                    x = starRadius + (Math.random() * canvas.width);
                    y = starRadius + (Math.random() * canvas.height);
                }

			ctx.arc(x, y, starRadius*Math.random(), 0, Math.PI*2, false);
      //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

      var rand = Math.random();
      if(rand <= 0.5){
				  ctx.fillStyle = "rgba(255, 255, 255, 1)";
				  ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
				  ctx.shadowBlur = 3;
			}
			else if(rand > 0.75){
				  ctx.fillStyle = "rgba(255, 254, 196, 1)";
				  ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
				  ctx.shadowBlur = 4;
			}
			else{
				  ctx.fillStyle = "rgba(192, 247, 255, 1)";
				  ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
				  ctx.shadowBlur = 7;
			}
			ctx.fill();
	}

  $(document).ready(function(){

		var canvas = document.getElementById("space");
		var context = canvas.getContext("2d");

    onresize = function(){
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();

    interval = setInterval(
      function(interval){
        generateStar(canvas, context, 3);
      }
      , 24);

    setTimeout( // Stop the stars creation after 10s
      function(){ clearInterval(interval); }
      ,5000
    );

	});
})(jQuery);
