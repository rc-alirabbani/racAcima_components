'use strict';

$('.accordion-button').each(function () {
    if ($(this).hasClass('active')) {
        $(this).parent().find('.inner').show();
    }
});


$('.pdPlusAccordion .experience-component .accordion-button').click(function () {
    $(this).parent().siblings().find('.inner').slideDown();
    $('.inner').not($(this).next()).slideUp(500).prev().removeClass('active');
});


// // Show inner content for active accordion buttons on page load
// $(".accordion-button.active").next(".inner").show();

// // Toggle accordion functionality on click
// $(".pdPlusAccordion .experience-component .accordion-button").click(function () {
// 	console.log("abc");
// 	var $this = $(this);
// 	$this.toggleClass("active");
// 	$this.next(".inner").slideDown();

// 	// Close other accordions
// 	$this.parent().siblings().find(".accordion-button").removeClass("active").next(".inner").slideUp();
// });
