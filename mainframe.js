
$(".nav-tabs").first().click(function () {
	$(".nav-debate").addClass("change-nav-on");
	$(".nav-debate").removeClass("change-nav-off");
	$(".nav-guide").addClass("change-nav-off");
	$(".nav-guide").removeClass("change-nav-on");
});

$(".nav-tabs").last().click(function () {
	$(".nav-guide").addClass("change-nav-on");
	$(".nav-guide").removeClass("change-nav-off");
	$(".nav-debate").addClass("change-nav-off");
	$(".nav-debate").removeClass("change-nav-on");
});
