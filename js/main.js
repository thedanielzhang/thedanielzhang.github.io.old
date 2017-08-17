

$(document).ready(function(){

	$("#loading").css("visibility", "hidden");

	$("#enter-button").on("click", function() {
		$("#landing-page").css("visibility", "hidden");
		$("#introduction-page").css("visibility", "visible");
		$("#detail").css("visibility", "hidden");
	});

	$(".introduction-option").on("click", function() {
		$("#introduction-page").css("visibility", "visible");
		$(".page").not("#introduction-page").css("visibility", "hidden");
		$("#detail").css("visibility", "hidden");
		$("#detail-overlay").css("visibility", "hidden");
		$(".project-detail").css("visibility", "hidden");
	});

	$(".project-option").on("click", function() {
		$("#project-page").css("visibility", "visible");
		$(".page").not("#project-page").css("visibility", "hidden");
		$("#detail").css("visibility", "hidden");
		$("#detail-overlay").css("visibility", "hidden");
		$(".project-detail").css("visibility", "hidden");
	});

	$(".resume-option").on("click", function() {
		$("#resume-page").css("visibility", "visible");
		$(".page").not("#resume-page").css("visibility", "hidden");
		$("#detail").css("visibility", "hidden");
		$("#detail-overlay").css("visibility", "hidden");
		$(".project-detail").css("visibility", "hidden");
	});

	$(".contact-option").on("click", function() {
		$("#contact-page").css("visibility", "visible");
		$(".page").not("#contact-page").css("visibility", "hidden");
		$("#detail").css("visibility", "hidden");
		$("#detail-overlay").css("visibility", "hidden");
		$(".project-detail").css("visibility", "hidden");
	});

	$("#corgo-card").on("click", function() {
		$("#corgo-detail").css("visibility", "visible");
	});

	$("#spotifind-card").on("click", function() {
		$("#spotifind-detail").css("visibility", "visible");
	});

	$("#personal-card").on("click", function() {
		$("#personal-detail").css("visibility", "visible");
	});

	$("#school-card").on("click", function() {
		$("#school-detail").css("visibility", "visible");
	});

	$(".project-card").on("click", function() {
		$("#detail-overlay").css("visibility", "visible");
	});

	$(".exit-button").on("click", function() {
		$(".project-detail").css("visibility", "hidden");
		$("#detail-overlay").css("visibility", "hidden");
	});

	
});