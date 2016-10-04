$(document).ready(function() {
	var Profile_Body = $('.Profile_Body').children();
	$(".btn.btn-info").click(function() {
		$(".about_me").slideToggle("slow");
	});
	$(".btn.btn-portfolio").click(function() {
		$(".portfolio").slideToggle("slow");
	});
	$(".btn.btn-contacts").click(function() {
		$(".contacts").slideToggle("slow");
	});
	// 	/*$(".btn.btn-portfolio").slideDown("slow");
	// 	$(".btn.btn-contacts").slideDown("slow");*/
});