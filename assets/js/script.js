const workHistorySection = $("#work-history-section");

// This sets a variable to compare current screen widths to, in order to determine whether or not the screen has been resized.
let lastWidth = $(window).width();

$(document).ready(function() {
	toggleTimeline();
	toggleTimelineAccessible();
    animateUpArrow();
    closeNavbarMobile();
});

/* The resize code below that specifically targets screen width change. 
Taken from: https://stackoverflow.com/questions/10750603/detect-a-window-width-change-but-not-a-height-change */
$(window).resize(function() {
	if ($(window).width() != lastWidth) {
		location.reload();
		lastWidth = $(window).width();
	}
	toggleTimeline();
	toggleTimelineAccessible();
});

/* FUNCTION 1: This toggles the timeline information.
    This code was modified from Will Chow's original at: https://jsfiddle.net/wilchow/4hzenxkh/ (also linked in README)
    I also used the first line of @dynamyc-2's code from CSS Tricks: https://css-tricks.com/forums/topic/jquery-window-width-condition/ (also linked in README)

    On Small screens it shows timeline info by increasing the z-index, it calls the blur and darken function to apply those styles to the background, and it
    ensures this doesn't apply when the sun icon is clicked. When the close button or elsewhere is clicked the timeline info is hidden and blur and darkness is undone.
    On Larger screens it just shows and hides the timeline information.
*/
function toggleTimeline() {
	if ($(window).width() < 768) {
		$(".timeline-icon").click(function() {
			$(this).parent().parent().find(".timeline-info").css("z-index", "1000");
			addBlurDarken();
			if ($(this).hasClass("fa-sun")) {
				removeBlurDarken();
			}
		});
		$(".close-button").click(function() {
			$(".timeline-info").css("z-index", "-1000");
			removeBlurDarken();
		});
	} else if ($(window).width() >= 768) {
		$(".timeline-icon").mouseover(function() {
			$(this).parent().parent().find(".timeline-info").css("z-index", "1000");
		});
		$(".timeline-icon").mouseout(function() {
			$(".timeline-info").css("z-index", "-1000");
		});
	}
}
/* FUNCTION 2: Timeline toggle function for keyboard accessibility
    This function is akin to the one above except that instead of mousein and mouseout the trigger events are focus and blur.
*/
function toggleTimelineAccessible() {
	if ($(window).width() < 768) {
		$(".timeline-icon").focus(function() {
			$(this).parent().parent().find(".timeline-info").css("z-index", "1000");
			addBlurDarken();
			if ($(this).hasClass("fa-sun")) {
				removeBlurDarken();
			}
		});
		$(".close-button").focus(function() {
			$(".timeline-info").css("z-index", "-1000");
			removeBlurDarken();
		});
		$(".timeline-icon").blur(function() {
			$(".timeline-info").css("z-index", "-1000");
			removeBlurDarken();
		});
	} else if ($(window).width() >= 768) {
		$(".timeline-icon").focus(function() {
			$(this).parent().parent().find(".timeline-info").css("z-index", "1000");
		});
		$(".timeline-icon").blur(function() {
			$(".timeline-info").css("z-index", "-1000");
		});
	}
}

//FUNCTION 3: Adds a blur and darkening effect to the background of timeline.  
function addBlurDarken() {
	workHistorySection.find(".timeline-icon").addClass("blur-and-darken");
	workHistorySection.find(".timeline-line").addClass("blur-and-darken");
	$(".work-history-heading").addClass("blur-and-darken");
	$(".timeline-instruction-tap-click").addClass("blur-and-darken");
	$(".timeline-instruction-hover-focus").addClass("blur-and-darken");
	$(".end-of-timeline").addClass("blur-and-darken");
	$(".arrow-down-history-to-skills").addClass("blur-and-darken");
}
// FUNCTION 4: Removes the blur and darkenening class from the background elements.
function removeBlurDarken() {
	workHistorySection.find(".timeline-icon").removeClass("blur-and-darken");
	workHistorySection.find(".timeline-line").removeClass("blur-and-darken");
	$(".work-history-heading").removeClass("blur-and-darken");
	$(".timeline-instruction-tap-click").removeClass("blur-and-darken");
	$(".timeline-instruction-hover-focus").removeClass("blur-and-darken");
	$(".end-of-timeline").removeClass("blur-and-darken");
	$(".arrow-down-history-to-skills").removeClass("blur-and-darken");
}

/* FUNCTION 5: Closes the navbar on mobile devices when a user clicks outside of the navigation & when they click on a navigation link.
   Taken from nozzlemans's Stack Overflow Solution at: https://stackoverflow.com/questions/23764863/how-to-close-an-open-collapsed-navbar-when-clicking-outside-of-the-navbar-elemen 
   */
function closeNavbarMobile() {
    $(document).click(function(event) {
        var clickedArea = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickedArea.hasClass("navbar")) {
            $("button.navbar-toggler").click();
        }
    });
}

/* FUNCTION 6: Animates the up arrow when a user hovers over the entire "Back to Top" div.
I had this originally as a hover effect over the icon, but I felt the icon was too small a target.  
*/
function animateUpArrow() {
	$(".back-to-top").mouseover(function() {
		$(".fa-long-arrow-alt-up").css("animation", "arrow-up 1s ease-in-out infinite");
	});
	$(".back-to-top").mouseout(function() {
		$(".fa-long-arrow-alt-up").css("animation", "none");
	});
}

/* CLICK EVENT: Adds and removes the "active" class to and from NavBar as a user browses the page.
   Taken from Pete TNT's Stack Overflow Solution at: https://stackoverflow.com/questions/24514717/bootstrap-navbar-active-state-not-working   
   */
$(".navbar-nav a").on("click", function() {
	$(".navbar-nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
});

/* SCROLL EVENT: Changes the "active" class on scroll. 
Taken and altered from Alexandr Malyita's code on Stack Overflow: https://stackoverflow.com/questions/41630229/how-to-change-the-active-class-on-scroll-in-bootstrap-using-jquery  
*/
$(window).on('scroll', function(event){
   var scrollPos = $(document).scrollTop();
   $(".navbar-nav li a").each(function () { 
     var currLink = $(this); 
     var refElement = $(currLink.attr("href")); 
     if (refElement.position().top <= (scrollPos + 100) && refElement.position().top + refElement.height() > scrollPos) {
       currLink.parent().addClass("active").siblings().removeClass("active"); 
       return;
     }
     else{
       currLink.parent().removeClass("active");
     }
   })
 })