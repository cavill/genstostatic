$(window).load(function(){
	$(".loading img").css("opacity","0");
    $('div.loading').fadeOut(800);
    //todo:  delete?

    $("header").css({
    	"position": "relative",
    	"z-index": "5"
    });
});

$(window).resize(function() {
    $('header').height($.waypoints('viewportHeight'));
    $('footer').css("min-height",($.waypoints('viewportHeight')*0.25)).css("padding-top",($.waypoints('viewportHeight')*0.25));

    // footer size
    fh = $("footer").outerHeight();
    $(".faux-footer").css("height",fh);
});

$(window).trigger('resize');

var modal = $("#modal");

// Show the modal
$(".opening-link").click(function() {
	modal.toggleClass("show");

	// get outer height of modal and center vertically?
	var mh = modal.outerHeight();

	// hieght of window take height of modal, divided by two
	var wh = $.waypoints('viewportHeight') - mh;

	modal.css("top", wh*0.5);

	return false;
});

// Hide the modal when clicking the overlay
function noModal() {
	$("#modal").removeClass("show");
	return false;
}
$(".overlay").click(function() {
	noModal();
});
$("#modal").click(function() {
	noModal();
});

//hide logo
$(document).scroll(function(e){

	position = $(window).scrollTop();
	p = (Math.round(position / 10) * 10);

	$(".main-logo").css("opacity",1 - p*0.0018).css({
		"-webkit-transform":"translateY(-"+ p*0.1 +"px)",
		"-moz-transform":"translateY(-"+ p*0.1 +"px)",
		"-o-transform":"translateY(-"+ p*0.1 +"px)",
		"-ms-transform":"translateY(-"+ p*0.1 +"px)",
		"transform":"translateY(-"+ p*0.1 +"px)"
	});

	$(".tomato").css({
		"-webkit-transform":"translateX("+ p*0.06 +"px)",
		"-moz-transform":"translateX("+ p*0.06 +"px)",
		"-o-transform":"translateX("+ p*0.06 +"px)",
		"-ms-transform":"translateX("+ p*0.06 +"px)",
		"transform":"translateX("+ p*0.06 +"px)"
	});

	$(".grapes").css({
		"-webkit-transform":"translateX(-"+ p*0.06 +"px)",
		"-moz-transform":"translateX(-"+ p*0.06 +"px)",
		"-o-transform":"translateX(-"+ p*0.06 +"px)",
		"-ms-transform":"translateX(-"+ p*0.06 +"px)",
		"transform":"translateX(-"+ p*0.06 +"px)"
	});

	var wh = $.waypoints('viewportHeight');

	if (position > wh+50) {
		$(".opening-link").css("visibility","hidden");
		$(".photography").css("visibility","hidden");
	} else {
		$(".opening-link").css("visibility","visible");
		$(".photography").css("visibility","visible");
	} // todo: check if this can be deleted

});

$('header').waypoint(function() {
  $(".vines").addClass("show");
}, {
  offset: function() {
    return -$(this).height()*0.8;
  }
});

//random bg image

function rando() {
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
	$('header').css({
		'background-image': 'url(assets/img/store_update/' + images[Math.floor(Math.random() * images.length)] + ')'
	});

	console.log("done");
};

rando();

$(".camera").on("click", function() {
	rando();
	return false;
});

